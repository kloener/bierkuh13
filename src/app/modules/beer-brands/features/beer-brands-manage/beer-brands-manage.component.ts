import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BeerBrands } from '@app/modules/beer-brands/domain/beer-brands';
import {
  BeerBrandsManageFacadeService,
} from '@app/modules/beer-brands/features/beer-brands-manage/beer-brands-manage-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-beer-brands-manage',
  templateUrl: './beer-brands-manage.component.html',
  styleUrls: ['./beer-brands-manage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeerBrandsManageComponent implements OnInit {
  list$: Observable<BeerBrands[]>;

  constructor(private readonly facade: BeerBrandsManageFacadeService) {
    this.list$ = this.facade.list$;
  }

  ngOnInit(): void {
  }

  create(value: string) {
    value.split(',').forEach(val => this.facade.create(val.trim()));
  }

  deleteBrand(brand: BeerBrands) {
    this.facade.remove(brand);
  }
}
