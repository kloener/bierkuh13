import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bierkuh-header',
  templateUrl: './bierkuh-header.component.html',
  styleUrls: ['./bierkuh-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BierkuhHeaderComponent {

  readonly headerPath = 'assets/Header.png';
}
