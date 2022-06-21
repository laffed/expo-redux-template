import { dummy } from '../dummy';


describe('dummy Method Tests', () => {
  it('should return dummy string value', () => {
    expect.assertions(1);
    expect(dummy()).toBe('dummy');
  });
});
