import { Locator, Page } from "@playwright/test";

export class InputsPage {
    page: Page
    input: Locator

    constructor (page: Page) {
        this.page = page
        this.input = page.locator('input[type="number"]')
    }

    async fillInputWithNumber(number: number) {
        await this.input.fill(`${number}`)
    }

    async fillInputWithText(text: string) {
        await this.input.type(text)
    }

    async clearInput() {
        await this.input.clear()
    }
}
