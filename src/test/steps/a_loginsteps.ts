import { Given, When, Then , setDefaultTimeout} from '@cucumber/cucumber';
import { fixture } from  '../hooks/pageFixture';

setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
  await fixture.page.goto("https://www.saucedemo.com/");
    console.log("User navigates to the applications .....");
    
  });



  When('User is on the login page', async function () {
    console.log("User is on the login page .....");
  });


  When('user enters valid username as {string}', async function (username: string) {
    await fixture.page.locator('//div//input[@id="user-name"]').fill(username);
    console.log("User enters valid username as .....");
  });



  When('User enter valid password as {string}', async function (password:string) {
    await fixture.page.locator('//div//input[@id="password"]').fill(password);
    await fixture.page.locator('//div//input[@id="login-button"]').click();
    await fixture.page.waitForTimeout(2000);
    console.log("User enter valid password as .....");
  });



  Then('User should be redirected to the home page', async function () {
    await fixture.page.isVisible("app_logo");
    console.log("User should be redirected to the home page .....");
    
  });

  When('user enters invalid in_username as {string}', async function (in_username: string) {
    await fixture.page.goto("https://www.saucedemo.com/");
    await fixture.page.locator('//div//input[@id="password"]').fill(in_username);
    await fixture.page.locator('//div//input[@id="login-button"]').click();
    console.log("User enter valid password as .....");
  });

  
  When('User enter invalid in_password as {string}', async function (in_password:string) {
    await fixture.page.locator('//div//input[@id="password"]').fill(in_password);
    await fixture.page.locator('//div//input[@id="login-button"]').click();
    console.log("User enter valid password as .....");
  });

  Then('User should see an error message', async function () {
    await fixture.page.isVisible('//div//h3');
    console.log("User should be redirected to the home page .....");
    
  });



  
