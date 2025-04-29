import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { HomePage } from '../../pages/home-page';

test('[TEST-T1] should login with valid credentials', async ({ page }) => {
  const homePage = new HomePage(page)
  const loginPage = new LoginPage(page)

  await page.goto('/')

  await homePage.openLoginPage()

  await loginPage.login('tomsmith', 'SuperSecretPassword!')
  await expect(loginPage.flashSuccess).toBeVisible()
})
