import { Locator, Page } from "@playwright/test";

export class HomePage {
    page: Page
    loginPageLink: Locator
    forgotPasswordPageLink: Locator
    inputsPageLink: Locator
    dropdownPageLink: Locator
    checkboxesPageLink: Locator



    constructor (page: Page) {
        this.page = page
        this.loginPageLink = page.locator('a[href="/login"]')
        this.forgotPasswordPageLink = page.locator('a[href="/forgot_password"]')
        this.inputsPageLink = page.locator('a[href="/inputs"]')
        this.dropdownPageLink = page.locator('a[href="/dropdown"]')
        this.checkboxesPageLink = page.locator('a[href="/checkboxes"]')
    }

    async openLoginPage() {
        await this.loginPageLink.click()
    }  

    async openForgotPasswordPage() {
        await this.forgotPasswordPageLink.click()
    }    

    async openInputsPage() {
        await this.inputsPageLink.click()
    }   

    async openDropdownPage() {
        await this.dropdownPageLink.click()
    }  

    async openCheckboxesPage() {
        await this.checkboxesPageLink.click()
    } 
}
