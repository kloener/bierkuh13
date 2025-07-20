import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bierkuh-header',
  templateUrl: './bierkuh-header.component.html',
  styleUrls: ['./bierkuh-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink]
})
export class BierkuhHeaderComponent {

  readonly headerPath = 'assets/Header.png';
}
