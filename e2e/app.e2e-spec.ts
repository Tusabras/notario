import { NotarioBPage } from './app.po';

describe('notario-b App', () => {
  let page: NotarioBPage;

  beforeEach(() => {
    page = new NotarioBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
