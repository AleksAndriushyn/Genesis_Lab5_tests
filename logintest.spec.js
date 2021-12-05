const { test, expect } = require('@playwright/test');
// const { HomePage } = require('../page/home');
// const { LoginPage } = require('../page/login');

test('test1', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', 'aleks');
  await page.fill('#loginpassword', 'aleks');

  
  page.click('#logInModal .btn.btn-primary');
  await page.click('text=Welcome aleks');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
});


test('test2', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.click('#signin2');
  await page.fill('#sign-username', 'kirr');
  await page.fill('#sign-password', 'kirr');
  page.click('#signInModal .btn.btn-primary');

  await page.click('#login2');
  await page.fill('#loginusername', 'kirr');
  await page.fill('#loginpassword', 'kirr');

  
  page.click('#logInModal .btn.btn-primary');
  await page.click('text=Welcome kirr');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
});



