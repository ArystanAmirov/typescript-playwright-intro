// import {test, expect, Locator} from '@playwright/test'
// import { HomePage } from '../../pages/home-page';
// import { CheckboxesPage } from '../../pages/checkboxes-page';

// test('should check checkbox interaction', async ({ page }) => {
//     const homePage = new HomePage(page)
//     const checkboxesPage = new CheckboxesPage(page)

//     await page.goto('/')

//     await homePage.openCheckboxesPage()

//     if (await checkboxesPage.checkbox.isChecked()){
//         await checkboxesPage.uncheckCheckbox()
//         await expect(checkboxesPage.checkbox).not.toBeChecked()
//     } else {
//         await checkboxesPage.checkCheckbox();
//         await expect(checkboxesPage.checkbox).toBeChecked()
//     }
// })
