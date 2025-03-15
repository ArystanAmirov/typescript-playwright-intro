import { Locator, Page } from "@playwright/test";

export class DropdownPage {
    page: Page
    dropdown: Locator

    constructor (page: Page) {
        this.page = page
        this.dropdown = page.locator('#dropdown')
    }

    async selectDropdownOption(option: string) {
        await this.dropdown.selectOption(option)
    }
}
