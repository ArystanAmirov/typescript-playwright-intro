import { Locator, LocatorScreenshotOptions, Page } from "@playwright/test";

export class JsAlertsPage {
    page: Page
    jsAlertButton: Locator
    resultText: Locator

    constructor(page: Page) {
        this.page = page
        this.jsAlertButton = page.locator('button[onClick="jsAlert()"]')
        this.resultText = page.locator('#result')
    }

    async clickOnJsAlertButton() {
        await this.jsAlertButton.click()
    }
}
