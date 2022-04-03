import { Component, OnInit } from '@angular/core';
import {
  BeerBrandsManageFacadeService
} from "@app/modules/beer-brands/features/beer-brands-manage/beer-brands-manage-facade.service";
import {BeerBrands} from "@app/modules/beer-brands/domain/beer-brands";
import {Observable} from "rxjs";

@Component({
  selector: 'app-beer-brands-manage',
  templateUrl: './beer-brands-manage.component.html',
  styleUrls: ['./beer-brands-manage.component.scss']
})
export class BeerBrandsManageComponent implements OnInit {
  list$: Observable<BeerBrands[]>;
  manageBrands: boolean = false;

  constructor(private readonly facade: BeerBrandsManageFacadeService) {
    this.list$ = this.facade.list$;
  }

  ngOnInit(): void {
  }

  create(value: string) {
    value.split(',').forEach(val => this.facade.create(val));
  }

  deleteBrand(brand: BeerBrands) {
    this.facade.remove(brand);
  }
}
