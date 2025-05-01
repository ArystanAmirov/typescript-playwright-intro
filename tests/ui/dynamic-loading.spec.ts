// import { test, expect } from '@playwright/test'
// import { HomePage } from '../../pages/home-page'
// import { DynamicLoadingPage } from '../../pages/dynamic-loading-page'


// test('should wait for hidden element to become visible and verify text', async ({ page }) => {
//     const homePage = new HomePage(page)
//     const dynamicLoadingPage = new DynamicLoadingPage(page)

//     await page.goto('/')
//     await homePage.openDynamicLoadingPage()
//     await dynamicLoadingPage.clickOnExample1()
//     await dynamicLoadingPage.clickOnStartButton()
//     await dynamicLoadingPage.appearedElement.waitFor()

//     await expect(dynamicLoadingPage.appearedElement).toBeVisible()
//     await expect(dynamicLoadingPage.appearedElement).toHaveText('Hello World!')
// })

// test('should wait for dynamically rendered element and verify text', async ({ page }) => {
//     const homePage = new HomePage(page)
//     const dynamicLoadingPage = new DynamicLoadingPage(page)

//     await page.goto('/')
//     await homePage.openDynamicLoadingPage()
//     await dynamicLoadingPage.clickOnExample2()
//     await dynamicLoadingPage.clickOnStartButton()
//     await dynamicLoadingPage.appearedElement.waitFor()

//     await expect(dynamicLoadingPage.appearedElement).toBeVisible()
//     await expect(dynamicLoadingPage.appearedElement).toHaveText('Hello World!')
// })
