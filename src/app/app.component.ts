import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { KeyboardShortcutsService } from './core/keyboard-shortcuts/keyboard-shortcuts.service';
import { BierkuhHeaderComponent } from './shared/bierkuh-header/bierkuh-header.component';
import { ShortcutsHelpComponent } from './shared/shortcuts-help/shortcuts-help.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BierkuhHeaderComponent, RouterOutlet, ShortcutsHelpComponent]
})
export class AppComponent {
  /** Eager init: global shortcut listener lives on the root service. */
  private readonly _keyboardShortcuts = inject(KeyboardShortcutsService);
}
