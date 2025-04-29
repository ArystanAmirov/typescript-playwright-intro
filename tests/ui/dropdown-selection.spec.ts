import { test, expect } from '@playwright/test'
import { HomePage } from '../../pages/home-page';
import { DropdownPage } from '../../pages/dropdown-page';

test('[TEST-T2] should select Option 2 from dropdown', async ({ page }) => {
    const homePage = new HomePage(page)
    const dropdownPage = new DropdownPage(page)
    
    await page.goto('/');

    await homePage.openDropdownPage()

    await dropdownPage.selectDropdownOption('2')
    const option = await dropdownPage.dropdown.inputValue()
    await expect(option).toBe('2')
})
