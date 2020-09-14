export class BasePage {
    
    public anyItem(item: string) : string { return `//*[@text='${item}']` }
    
    public goToMenu(item: string, driver?: WebdriverIO.BrowserObject) {
        if (driver)
            driver.$(this.anyItem(item)).click()
        else
            $(this.anyItem(item)).click()
    }

    public checkAnyItemVisibility(item: string, driver?: WebdriverIO.BrowserObject) {
        if (driver)
            driver.$(this.anyItem(item)).waitForDisplayed()
        else
            $(this.anyItem(item)).waitForDisplayed()
    }
}
export const basePage = new BasePage()