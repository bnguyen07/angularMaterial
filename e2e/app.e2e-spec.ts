import { AngularMaterialPage } from './app.po';

describe('angular-material App', () => {
  let page: AngularMaterialPage;

  beforeEach(() => {
    page = new AngularMaterialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
