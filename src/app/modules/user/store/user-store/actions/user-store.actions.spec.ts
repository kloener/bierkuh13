import * as fromUserStore from './user-store.actions';

describe('loadUserStores', () => {
  it('should return an action', () => {
    expect(fromUserStore.loadUserStores().type).toBe('[UserStore] Load UserStores');
  });
});
