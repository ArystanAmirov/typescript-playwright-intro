import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { InputsPage } from '../../pages/inputs-page';

test('should interact with input field', async ({ page }) => {
    const homePage = new HomePage(page)
    const inputsPage = new InputsPage(page)

    await page.goto('/');

    await homePage.openInputsPage()

    await inputsPage.fillInputWithNumber(42)
    const valueAfterFill = await inputsPage.input.inputValue()
    await expect(valueAfterFill).toBe('42')

    await inputsPage.clearInput()
    const valueAfterClear = await inputsPage.input.inputValue()
    await expect(valueAfterClear).toBe('')
})
