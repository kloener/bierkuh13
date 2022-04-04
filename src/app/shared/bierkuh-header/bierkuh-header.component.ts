import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bierkuh-header',
  templateUrl: './bierkuh-header.component.html',
  styleUrls: ['./bierkuh-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BierkuhHeaderComponent {

  readonly headerPath: string;

  constructor() {
    this.headerPath = 'assets/Header.png';
  }

}
