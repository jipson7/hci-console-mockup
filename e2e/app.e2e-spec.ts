import { HciPage } from './app.po';

describe('hci App', function() {
  let page: HciPage;

  beforeEach(() => {
    page = new HciPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
