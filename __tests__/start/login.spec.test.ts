import { openBrowser, goto, closeBrowser, screenshot,write,$, click } from "taiko";

describe("WordPress Login", () => {
  beforeEach( async () => {
    await openBrowser({ headless: false });
    await goto("http://localhost:8000/wp-admin");
  });

  afterEach( async () => {
    await screenshot();
    await closeBrowser();
  });

  it.only("User with Valid Admin Login should be able to see settings option", async () => {
    let credentials = {
      username: "admin",
      password: "admin",
    };
    await write(credentials.username, $("#user_login"));
    await write(credentials.password, $("#user_pass"));
    await click($("#wp-submit"));
    await $("#menu-settings").exists()
  });
});
