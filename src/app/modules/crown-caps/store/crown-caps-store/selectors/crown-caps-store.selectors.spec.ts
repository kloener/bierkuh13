import * as fromCrownCapsStore from '../reducers/crown-caps-store.reducer';
import { selectCrownCapsStoreState } from './crown-caps-store.selectors';

describe('CrownCapsStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCrownCapsStoreState({
      [fromCrownCapsStore.crownCapsStoreFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
