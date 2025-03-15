import { Locator, Page } from "@playwright/test";

export class InputsPage {
    page: Page
    input: Locator

    constructor (page: Page) {
        this.page = page
        this.input = page.locator('input[type="number"]')
    }

    async fillInput(number: number) {
        await this.input.fill(`${number}`)
    }

    async clearInput() {
        await this.input.clear()
    }
}