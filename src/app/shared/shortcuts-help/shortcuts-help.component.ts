import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { KeyboardShortcutsService } from '@app/core/keyboard-shortcuts/keyboard-shortcuts.service';

@Component({
  selector: 'app-shortcuts-help',
  templateUrl: './shortcuts-help.component.html',
  styleUrls: ['./shortcuts-help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShortcutsHelpComponent {
  protected readonly shortcuts = inject(KeyboardShortcutsService);

  close(): void {
    this.shortcuts.closeHelp();
  }

  onPanelClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
