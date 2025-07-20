import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { LoggedInAsInfoFacadeService } from '@app/modules/user/application/logged-in-as-info-facade.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-logged-in-as-info',
  templateUrl: './logged-in-as-info.component.html',
  styleUrls: ['./logged-in-as-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe]
})
export class LoggedInAsInfoComponent implements OnInit {
  private readonly facadeService = inject(LoggedInAsInfoFacadeService);


  userName$ = this.facadeService.userName$;

  ngOnInit(): void {
  }

  logout() {
    this.facadeService.logout();
  }
}
