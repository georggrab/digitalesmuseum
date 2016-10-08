import { DigitalesmuseumFrontPage } from './app.po';

describe('digitalesmuseum-front App', function() {
  let page: DigitalesmuseumFrontPage;

  beforeEach(() => {
    page = new DigitalesmuseumFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
