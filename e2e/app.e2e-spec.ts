import { Chapter3Page } from './app.po';

describe('chapter3 App', function() {
  let page: Chapter3Page;

  beforeEach(() => {
    page = new Chapter3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
