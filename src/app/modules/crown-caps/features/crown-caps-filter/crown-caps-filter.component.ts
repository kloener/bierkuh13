import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CrownCapsFilterFacadeService} from "@app/modules/crown-caps/application/crown-caps-filter-facade.service";

@Component({
  selector: 'app-crown-caps-filter',
  templateUrl: './crown-caps-filter.component.html',
  styleUrls: ['./crown-caps-filter.component.scss']
})
export class CrownCapsFilterComponent implements OnInit {

  @ViewChild('brandSelectEl', { read: ElementRef}) brandSelectEl?: ElementRef<HTMLSelectElement>;
  @ViewChild('typeOfBeerEl', { read: ElementRef}) typeOfBeerEl?: ElementRef<HTMLSelectElement>;

  constructor(private readonly facadeService: CrownCapsFilterFacadeService) {
  }

  ngOnInit(): void {
  }

  onChange(target?: EventTarget | null) {
    const value = (target as HTMLSelectElement)?.value;
    this.facadeService.search(value);

    if (this.brandSelectEl) this.brandSelectEl.nativeElement.value = '';
    if (this.typeOfBeerEl) this.typeOfBeerEl.nativeElement.value = '';
  }
}
