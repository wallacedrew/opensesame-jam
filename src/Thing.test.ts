import {Thing} from './Thing';

describe('Thing', () => {
  it('does the thing', () => {
    expect(new Thing()).not.toBeNull();
  });
});
