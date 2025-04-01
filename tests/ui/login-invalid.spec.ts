import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/login-page';
import { HomePage } from '../../pages/home-page';

test('should show error on invalid credentials', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await page.goto('/')

    await homePage.openLoginPage()

    await loginPage.login('wronguser', 'wrongpassword')
    await expect(loginPage.flashError).toBeVisible()
})
