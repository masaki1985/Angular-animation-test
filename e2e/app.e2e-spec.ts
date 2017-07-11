import { AnimationTestPage } from './app.po';

describe('animation-test App', () => {
  let page: AnimationTestPage;

  beforeEach(() => {
    page = new AnimationTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
