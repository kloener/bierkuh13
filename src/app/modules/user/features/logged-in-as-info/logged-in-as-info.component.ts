import { Component, OnInit } from '@angular/core';
import {LoggedInAsInfoFacadeService} from "@app/modules/user/application/logged-in-as-info-facade.service";

@Component({
  selector: 'app-logged-in-as-info',
  templateUrl: './logged-in-as-info.component.html',
  styleUrls: ['./logged-in-as-info.component.scss']
})
export class LoggedInAsInfoComponent implements OnInit {

  userName$ = this.facadeService.userName$;

  constructor(private readonly facadeService: LoggedInAsInfoFacadeService) { }

  ngOnInit(): void {
  }

  logout() {
    this.facadeService.logout();
  }
}
