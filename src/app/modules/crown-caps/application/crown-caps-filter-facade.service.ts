import { Injectable } from '@angular/core';
import {CrownCapsSearchFacadeService} from "@app/modules/crown-caps/application/crown-caps-search-facade.service";

@Injectable({
  providedIn: 'root'
})
export class CrownCapsFilterFacadeService {
  constructor(private readonly crownCapsSearchFacadeService: CrownCapsSearchFacadeService) { }

  search(search: string) {
    this.crownCapsSearchFacadeService.search(search);
  }
}
