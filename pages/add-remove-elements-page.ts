import { Locator, Page } from "@playwright/test";


export class AddRemoveElementsPage {
    page: Page
    addElementButton: Locator
    deleteButton: Locator

    constructor(page: Page) {
        this.page = page
        this.addElementButton = page.locator('button[onClick="addElement()"]')
        this.deleteButton = page.locator('button[onclick="deleteElement()"]')
    }

    async clickOnAddElementButton() {
        await this.addElementButton.click()
    }

    async clickOnDeleteButton() {
        await this.deleteButton.first().click()
    }
}
