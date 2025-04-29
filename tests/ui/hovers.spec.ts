// import {test, expect} from '@playwright/test'
// import { HomePage } from '../../pages/home-page'
// import { HoversPage } from '../../pages/hovers-page'

// test('should show and hide user info on hover', async ({ page }) => {
//     const homePage = new HomePage(page)
//     const hoverPage = new HoversPage(page)

//     await page.goto('/')

//     await homePage.openHoversPage()
//     await hoverPage.hoverElement()
//     await expect(hoverPage.text).toHaveText('name: user1')
    
//     await page.mouse.move(0,0)
//     expect(hoverPage.text).not.toBeVisible()
// })