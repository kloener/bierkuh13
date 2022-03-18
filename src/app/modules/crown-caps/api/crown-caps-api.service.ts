import { Injectable } from '@angular/core';
import { CrownCapsInfraService } from '../infra/crown-caps-infra.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsApiService {
  caps$: Observable<any>;

  constructor(private readonly infraService: CrownCapsInfraService) {
    this.caps$ = this.infraService.query;
  }
}
