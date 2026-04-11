import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { BeerBrands } from '@app/modules/beer-brands/domain/beer-brands';
import {
  BeerBrandsManageFacadeService,
} from '@app/modules/beer-brands/features/beer-brands-manage/beer-brands-manage-facade.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-beer-brands-manage',
  templateUrl: './beer-brands-manage.component.html',
  styleUrls: ['./beer-brands-manage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe]
})
export class BeerBrandsManageComponent implements OnInit {
  private readonly facade = inject(BeerBrandsManageFacadeService);

  list$: Observable<BeerBrands[]>;

  constructor() {
    this.list$ = this.facade.list$;
  }

  ngOnInit(): void {
  }

  create(input: HTMLInputElement) {
    const value = input.value;
    value
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean)
      .forEach((name) => this.facade.create(name));
    input.value = '';
  }

  deleteBrand(brand: BeerBrands) {
    this.facade.remove(brand);
  }
}
