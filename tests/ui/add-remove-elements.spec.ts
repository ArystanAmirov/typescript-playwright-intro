// import {test, expect} from '@playwright/test'
// import { AddRemoveElementsPage } from '../../pages/add-remove-elements-page'
// import { HomePage } from '../../pages/home-page'

// test('should add and remove an element', async ({ page }) => {
//     const homePage = new HomePage(page)
//     const addRemoveElementsPage = new AddRemoveElementsPage(page)

//     await page.goto('/')
//     await homePage.openAddRemoveElementsPage()

//     for (let i = 0; i < 5; i++) {
//         await addRemoveElementsPage.clickOnAddElementButton()
//     }

//     await expect(addRemoveElementsPage.deleteButton).toHaveCount(5)

//     while (await addRemoveElementsPage.deleteButton.count() > 0) {
//         await addRemoveElementsPage.clickOnDeleteButton()
//     }

//     await expect(addRemoveElementsPage.deleteButton).toHaveCount(0)
// })
