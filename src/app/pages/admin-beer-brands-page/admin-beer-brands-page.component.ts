import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoggedInAsInfoComponent } from "@app/modules/user/features/logged-in-as-info/logged-in-as-info.component";
import { BeerBrandsManageComponent } from "@app/modules/beer-brands/features/beer-brands-manage/beer-brands-manage.component";

@Component({
  selector: 'app-admin-beer-brands-page',
  templateUrl: './admin-beer-brands-page.component.html',
  styleUrls: ['./admin-beer-brands-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoggedInAsInfoComponent, BeerBrandsManageComponent]
})
export class AdminBeerBrandsPageComponent  {

}
