import { Angular2StopEmitterPage } from './app.po';

describe('angular2-stop-emitter App', function() {
  let page: Angular2StopEmitterPage;

  beforeEach(() => {
    page = new Angular2StopEmitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
