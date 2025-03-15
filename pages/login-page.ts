import { Locator, Page, expect } from '@playwright/test'

export class LoginPage {
    page: Page
    username: Locator
    password: Locator
    submitButton: Locator
    flashSuccess: Locator
    flashError: Locator
    logoutButton: Locator
    
    constructor (page: Page) {
        this.page = page
        this.username = page.locator('#username')
        this.password = page.locator('#password')
        this.submitButton = page.locator('button[type="submit"]')
        this.flashSuccess = page.locator('.flash.success')
        this.flashError = page.locator('.flash.error')
        this.logoutButton = page.locator('a.button.secondary.radius')
    }

     async login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.submitButton.click()
    }

    async logout() {
        await this.logoutButton.click()
    }
}



