import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class KeyboardShortcutsService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  private readonly focusSearch$ = new Subject<void>();
  private readonly focusBrandFilter$ = new Subject<void>();

  readonly focusSearchRequested = this.focusSearch$.asObservable();
  readonly focusBrandFilterRequested = this.focusBrandFilter$.asObservable();

  private readonly helpOpenWritable = signal(false);
  readonly helpOpen = this.helpOpenWritable.asReadonly();

  constructor() {
    fromEvent<KeyboardEvent>(this.document, 'keydown', { capture: true }).subscribe((e) =>
      this.onKeyDown(e)
    );
  }

  closeHelp(): void {
    this.helpOpenWritable.set(false);
  }

  private toggleHelp(): void {
    this.helpOpenWritable.update((v) => !v);
  }

  private isEditableTarget(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    if (target.isContentEditable) {
      return true;
    }
    const tag = target.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  }

  private isCmdOrCtrl(e: KeyboardEvent): boolean {
    return e.metaKey || e.ctrlKey;
  }

  private canFocusSearchOrBrand(): boolean {
    const url = this.router.url;
    return url.startsWith('/home') || url.startsWith('/admin-list');
  }

  private async ensureSearchContext(): Promise<void> {
    if (this.canFocusSearchOrBrand()) {
      return;
    }
    await this.router.navigate(['/home', '1']);
  }

  private queueFocus(fn: () => void): void {
    queueMicrotask(() => fn());
  }

  private async onFocusSearchShortcut(): Promise<void> {
    await this.ensureSearchContext();
    this.queueFocus(() => this.focusSearch$.next());
  }

  private async onFocusBrandShortcut(): Promise<void> {
    await this.ensureSearchContext();
    this.queueFocus(() => this.focusBrandFilter$.next());
  }

  private onKeyDown(e: KeyboardEvent): void {
    if (this.helpOpen() && e.key === 'Escape') {
      e.preventDefault();
      this.closeHelp();
      return;
    }

    const cmd = this.isCmdOrCtrl(e);
    const inEditable = this.isEditableTarget(e.target);

    if (e.key === '?' && !cmd && !inEditable) {
      e.preventDefault();
      this.toggleHelp();
      return;
    }

    if (e.key === '/' && !cmd && !e.altKey && !inEditable) {
      e.preventDefault();
      void this.onFocusSearchShortcut();
      return;
    }

    if (cmd && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      void this.onFocusSearchShortcut();
      return;
    }

    if (cmd && e.shiftKey && e.key.toLowerCase() === 'm') {
      e.preventDefault();
      void this.onFocusBrandShortcut();
      return;
    }

    if (cmd && e.key === ',') {
      e.preventDefault();
      void this.router.navigate(['/admin-beer-brands']);
      return;
    }
  }
}
