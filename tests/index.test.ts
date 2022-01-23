import { clear, mockUserAgent } from 'jest-useragent-mock'

import isFacebookInAppBrowser from '../src';

afterEach(clear);

describe('isFacebookInAppBrowser', () => {
  context('When user agent is facebook webview', () => {
    it('Should returns true', () => {
      mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]');

      expect(isFacebookInAppBrowser()).toBe(true);
    });
  });

  context('When user agent is not facebook webview', () => {
    it('Should returns false', () => {
      mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36');
      
      expect(isFacebookInAppBrowser()).toBe(false);
    });
  });
});
