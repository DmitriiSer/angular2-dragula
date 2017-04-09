import { Angular2DragulaPage } from './app.po';

describe('angular2-dragula App', () => {
  let page: Angular2DragulaPage;

  beforeEach(() => {
    page = new Angular2DragulaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
