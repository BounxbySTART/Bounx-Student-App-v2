import { DateFromUTCPipe } from './date-from-utc.pipe';

describe('DateFromUTCPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFromUTCPipe();
    expect(pipe).toBeTruthy();
  });
});
