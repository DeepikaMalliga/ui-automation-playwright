import { Before , After  } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { fixture } from "./pageFixture";

let browser: Browser;
let page: Page;



Before(async function () {
  console.log(" Setting up Playwright...");
  
  browser = await chromium.launch({ headless: false }); // Launch browser
  page = await browser.newPage(); // Open new page
  fixture.page = page; // Store the page in fixture

  console.log("Playwright setup completed!");
});


After(async function() {
  if (browser) {
    await browser.close();
}
});