import { Page, Locator} from '@playwright/test'

export class DynamicLoadingPage {
    page: Page
    example1: Locator
    example2: Locator
    startButton: Locator
    appearedElement: Locator

    constructor(page: Page) {
        this.page = page
        this.example1 = page.locator('a[href="/dynamic_loading/1"]')
        this.example2 = page.locator('a[href="/dynamic_loading/2"]')
        this.startButton = page.locator('button', {hasText: 'Start'})
        this.appearedElement = page.locator('h4', {hasText: 'Hello World!'})
    }
    
    async clickOnExample1() {
        await this.example1.click()
    }

    async clickOnExample2() {
        await this.example2.click()
    }

    async clickOnStartButton() {
        await this.startButton.click()
    }
}
