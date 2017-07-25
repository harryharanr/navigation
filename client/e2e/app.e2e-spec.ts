import { SiaaNavigationPage } from './app.po';

describe('siaa-navigation App', () => {
  let page: SiaaNavigationPage;

  beforeEach(() => {
    page = new SiaaNavigationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
