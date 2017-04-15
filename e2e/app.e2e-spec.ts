import { BasicsComponentsPage } from './app.po';

describe('basics-components App', () => {
  let page: BasicsComponentsPage;

  beforeEach(() => {
    page = new BasicsComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
