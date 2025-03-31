import { Locator, Page } from "@playwright/test";

export class DragDropPage {
    page: Page
    square1: Locator
    square2: Locator

    constructor (page: Page) {
        this.page = page
        this.square1 = page.locator('#column-a')
        this.square2 = page.locator('#column-b')
    }

    async dragSquare() {
        await this.square1.dragTo(this.square2)
    }
}
