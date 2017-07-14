import { ANGULARSHOPPage } from './app.po';

describe('angularshop App', () => {
  let page: ANGULARSHOPPage;

  beforeEach(() => {
    page = new ANGULARSHOPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
