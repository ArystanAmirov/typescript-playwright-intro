import { Page, Locator} from "@playwright/test";

export class HoversPage {
    page: Page
    figure: Locator
    text: Locator

    constructor(page: Page) {
        this.page = page
        this.figure = page.locator('.figure').nth(0)
       // this.text = page.locator('.figure').nth(0).locator('h5', {hasText: 'name: user1'})
        this.text = page.locator('.figure').nth(0).locator('.figcaption h5')
    }

    async hoverElement() {
        await this.figure.hover()
    }
}
