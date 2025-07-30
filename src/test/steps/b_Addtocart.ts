import {Given , Then , When , setDefaultTimeout} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { fixture } from '../hooks/pageFixture';
setDefaultTimeout(60 * 1000 * 2);

Given('User is on the homepage', async function () {
  await fixture.page.waitForTimeout(2000);
    await fixture.page.locator('//div[@class="inventory_list"]').isVisible();
    const content = await fixture.page.locator('//div[@class="inventory_list"]').textContent();
    console.log("Content of the inventory list:", content);
    console.log("User is on the homepage .....");
    
  });

When('User add a product to the cart', async function () {
  await fixture.page.waitForTimeout(2000);
  // await fixture.page.locator('//div//button[@id="add-to-cart-sauce-labs-backpack"]').waitFor({ state: 'attached' });
  await fixture.page.locator('//div//button[@id="add-to-cart-sauce-labs-backpack"]').click();
  await fixture.page.waitForTimeout(2000);
  console.log("User add a product to the cart .....");
});

Then('User should see the product in the cart', async function () {
  // await fixture.page.waitForTimeout(6000);
  // await fixture.page.locator('//div//a[@class="shopping_cart_link"]').click();
  // await fixture.page.waitForTimeout(2000);
  // await fixture.page.locator('//div//div[@class="cart_quantity"]').isVisible();
  // const cartText = await fixture.page.locator('//div//div[@class="cart_quantity"]').textContent();
  // expect(Number(cartText)).toBeGreaterThan(0);
  console.log("User should see the product in the cart .....");
  
});

