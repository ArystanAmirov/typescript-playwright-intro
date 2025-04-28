import { test, expect } from '@playwright/test'
import { HomePage } from '../../pages/home-page'
import { DragDropPage } from '../../pages/drag-drop-page'
import { text } from 'stream/consumers'

test('should swap elements on drag and drop', async ({ page }) => {
    const homePage = new HomePage(page)
    const dragDropPage = new DragDropPage(page)

    await page.goto('/')
    await homePage.openDragAndDropPage()
    await dragDropPage.dragSquare()

    expect(await dragDropPage.square1.textContent()).toBe('B')
    await expect(dragDropPage.square2.locator('header')).toHaveText('A')
})
