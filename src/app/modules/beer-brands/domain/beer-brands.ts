import {BeerBrandsDto} from "@app/modules/beer-brands/models/beer-brands-dto";

export class BeerBrands {
  id: string;
  name: string;

  constructor(identifier: string, json: BeerBrandsDto) {
    this.id = identifier;
    this.name = json.name;
  }
}
