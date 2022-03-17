import * as fromCrownCapsStore from './crown-caps-store.actions';

describe('loadCrownCapsStores', () => {
  it('should return an action', () => {
    expect(fromCrownCapsStore.loadCrownCapsStores().type).toBe('[CrownCapsStore] Load CrownCapsStores');
  });
});
