import { Locator, Page } from "@playwright/test";

export class HomePage {
    page: Page
    loginPageLink: Locator
    forgotPasswordPageLink: Locator
    inputsPageLink: Locator
    dropdownPageLink: Locator
    checkboxesPageLink: Locator
    dragAndDropPageLink: Locator
    jsAlertsPageLink: Locator
    hoversPage: Locator
    addRemoveElementsPage: Locator
    dynamicLoadingPage: Locator
    


    constructor (page: Page) {
        this.page = page
        this.loginPageLink = page.locator('a[href="/login"]')
        this.forgotPasswordPageLink = page.locator('a[href="/forgot_password"]')
        this.inputsPageLink = page.locator('a[href="/inputs"]')
        this.dropdownPageLink = page.locator('a[href="/dropdown"]')
        this.checkboxesPageLink = page.locator('a[href="/checkboxes"]')
        this.dragAndDropPageLink = page.locator('a[href="/drag_and_drop"]')
        this.jsAlertsPageLink = page.locator('a[href="/javascript_alerts"]')
        this.hoversPage = page.locator('a[href="/hovers"]')
        this.addRemoveElementsPage = page.locator('a[href="/add_remove_elements/"]')
        this.dynamicLoadingPage = page.locator('a[href="/dynamic_loading"]')
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

    async openDragAndDropPage() {
        await this.dragAndDropPageLink.click()
    }

    async openJSalertsPage() {
        await this.jsAlertsPageLink.click()
    }

    async openHoversPage() {
        await this.hoversPage.click()
    }
    
    async openAddRemoveElementsPage() {
        await this.addRemoveElementsPage.click()
    }

    async openDynamicLoadingPage() {
        await this.dynamicLoadingPage.click()
    }
}
