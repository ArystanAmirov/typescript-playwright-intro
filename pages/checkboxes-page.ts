import { Page, Locator } from "@playwright/test";

export class CheckboxesPage {
    page: Page
    checkbox: Locator

    constructor (page: Page) {
        this.page = page
        this.checkbox = page.locator('input[type=checkbox]').nth(0)
    }

    async checkCheckbox() {
        await this.checkbox.check()
    }

    async uncheckCheckbox() {
        await this.checkbox.uncheck()
    }
}