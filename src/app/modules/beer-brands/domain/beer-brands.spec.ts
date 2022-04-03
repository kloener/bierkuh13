import { BeerBrands } from './beer-brands';

describe('BeerBrands', () => {
  it('should create an instance', () => {
    expect(new BeerBrands('1', {name: 'hallo'})).toBeTruthy();
  });
});
