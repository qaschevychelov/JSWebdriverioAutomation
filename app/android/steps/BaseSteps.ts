import { homePage } from "../pages/HomePage"
import { loginPage } from "../pages/LoginPage"
import { basePage } from "../components/BasePage"

class BaseSteps {
    checkIfAppIsLaunched() {
        homePage.checkAnyItemVisibility("Demo app for the appium-boilerplate")
    }
    
    goToMenu(menu: string, driver?: WebdriverIO.BrowserObject) {
        homePage.goToMenu(menu, driver)
    }
    
    checkIfWeAreOnPage(text: string, driver?: WebdriverIO.BrowserObject) {
        homePage.checkAnyItemVisibility(text, driver)
    }
}
export const baseSteps = new BaseSteps()