import { openBrowser, goto, write, click, closeBrowser } from 'taiko';

describe("Sample Suite", () => {
  afterEach(() => {
  });
  beforeEach(() => {
  });

  describe("jest simple test", () => {
    it("open google", async () => {
      await openBrowser();
      await goto("google.com");
      await write("taiko test automation");
      await click("Google Search");
      await closeBrowser();
    });
  });
});
