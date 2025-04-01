import {test, expect} from '@playwright/test'
import { HomePage } from '../../pages/home-page';

test('should check forgotten password link', async ({ page }) => {
    const homePage = new HomePage(page)

    await page.goto('/')

    await homePage.openForgotPasswordPage()
    await expect(page.url()).toContain('https://the-internet.herokuapp.com/forgot_password');
})
