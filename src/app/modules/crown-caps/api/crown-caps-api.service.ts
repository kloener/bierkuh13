import { Injectable } from '@angular/core';
import { CrownCapsInfraService } from '../infra/crown-caps-infra.service';
import { Observable } from 'rxjs';
import { QueryChange } from 'rxfire/database';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsApiService {
  caps$: Observable<QueryChange[]>;
  constructor(private readonly infraService: CrownCapsInfraService) {
    this.caps$ = this.infraService.query;
  }
}
