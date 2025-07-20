import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BierkuhHeaderComponent } from "./shared/bierkuh-header/bierkuh-header.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BierkuhHeaderComponent, RouterOutlet]
})
export class AppComponent {
}
