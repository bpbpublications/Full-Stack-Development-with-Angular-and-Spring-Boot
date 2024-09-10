import { SimplePipe } from './simple.pipe';

describe('SimplePipe', () => {
  it('create an instance', () => {
    const pipe = new SimplePipe();
    expect(pipe).toBeTruthy();
  });
});
