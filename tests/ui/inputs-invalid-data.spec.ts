import { test, expect } from '@playwright/test'
import { HomePage } from '../../pages/home-page'
import { InputsPage } from '../../pages/inputs-page'

test('should reject letters and accept numbers', async ({ page }) => {
    const homePage = new HomePage(page)
    const inputsPage = new InputsPage(page)

    await page.goto('/')

    await homePage.openInputsPage()
    
    await inputsPage.fillInputWithText('abc')

    const valueAfterFillText = await inputsPage.input.inputValue()
    await expect(valueAfterFillText).toBe('')

    await inputsPage.fillInputWithNumber(50)
    const valueAfterFillNumer = await inputsPage.input.inputValue()
    await expect(valueAfterFillNumer).toBe('50')

    await inputsPage.clearInput()
    const valueAfterClear = await inputsPage.input.inputValue()
    await expect(valueAfterClear).toBe('')
})
