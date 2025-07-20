import { ChangeDetectionStrategy, Component, ElementRef, OnInit, inject, viewChild } from '@angular/core';
import { BeerBrands } from '@app/modules/beer-brands/domain/beer-brands';
import {
  BeerBrandsFilterFacadeService,
} from '@app/modules/beer-brands/features/beer-brands-filter/beer-brands-filter-facade.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

type LetteredBrands = { letter: string, brands: BeerBrands[] };

@Component({
  selector: 'app-beer-brands-filter',
  templateUrl: './beer-brands-filter.component.html',
  styleUrls: ['./beer-brands-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe]
})
export class BeerBrandsFilterComponent implements OnInit {
  private readonly facade = inject(BeerBrandsFilterFacadeService);


  letters$: Observable<Map<string, LetteredBrands>>;

  private readonly list$: Observable<BeerBrands[]> // = of([
    // Adambier,Alsfelder,Andechser,Astra,Aventinus,Bärenquell,Baisinger,Barre Bräu,Beck’s,Berliner Kindl,Berliner Weisse,Bitburger,Bölkstoff,Brauer Bier,Brauhaus Riegele,Breslauer Schöps,Brinkhoff\'s,Charlottenburger Pilsener,Cluss,Coschützer Pils,Degraa,Detmolder Pilsener,Diebels,Dinkelacker,Dortmunder Hansa,Dresdner Feldschlösschen,Duckstein,Eickel Pils,Einbecker,Engelhardt,Fucking Hell,Füchschen Alt,Garley,Gatzweilers Alt,Germania,Graf Arco Bier,Guinness,Haake-Beck,Hacker-Pschorr,Haller Löwenbräu,Hasseröder,Hemelinger Spezial,Henninger Karamell-Kraftbier,Herrnbräu,Hofbräu München,Ingo Bräu,Ingobräu,Innstadt Brauerei,Isenbeck,Jever,Karamalz,Karlsberg UrPils,Karlsquell,Kloster Alt,Kloster St. Marienthal,Kniesenack-Bier,König Pilsener,Köstritzer Schwarzbier,Krombacher,Kuchlbauer,Küppers Kölsch,Licher,Licher Privatbrauerei,Lindener Spezial,Löwenbrauerei Passau,Lößnitz-Pils,Lübzer,Mallersdorfer Klosterbräu,Meisterbräu,Mixery,Mölmsch,Mühlen-Kölsch,Nordbräu,Ochsenbräu,Ostmark,Öttinger,Päffgen Kölsch,Peschl Brauerei,Peters Kölsch,Pilsator,Pott’s,Ratsherrn,Reissdorf Kölsch,Rhenania Alt,Scherdel Bier,Schlappeseppel,Schlüssel Alt,Schultenbräu,Schultheiss-Pilsener,Schumacher Alt,Schwaben Bräu,Schwarzer Steiger,Schöfferhofer,Schütze-Bräu,Sinamar,Spatenbräu,Stern-Brauerei Essen,Sternburg,Sternquell,Störtebeker,Traugott Simon Kölsch,Uerige,Ur-Krostitzer,Ustersbacher,Veltins,Vitamalz,Brauerei Wasserburger,Weissbräu-Unertl,Zunft Kölsch,Zwiefalter Klosterbräu,]);
  readonly brandSelectEl = viewChild('brandSelectEl', { read: ElementRef });

  constructor() {
    this.list$ = this.facade.list$;
    this.letters$ = this.list$.pipe(
      map(list => list.reduce((acc, curr) => {
        const letter: string = curr.name.substring(0, 1).toUpperCase();

        let list = acc.get(letter)!;
        if (!acc.has(letter)) {
          acc.set(letter, {letter, brands: []});
          list = acc.get(letter)!;
        }

        list.brands.push(curr);

        return acc;
      }, new Map<string, LetteredBrands>()))
    )
  }

  ngOnInit(): void {
  }

  onChange(target: EventTarget | null) {
    const value = (target as HTMLSelectElement)?.value;
    this.facade.brandChanged(value);
    const brandSelectEl = this.brandSelectEl();
    if (brandSelectEl) brandSelectEl.nativeElement.value = '';
  }
}
