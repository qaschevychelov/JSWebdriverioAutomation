import {loginPage} from "../pages/login.page";
import {homePage} from "../pages/home.page";
import { on } from "process";
import { assert } from "console";

class HomeSteps {
    public open(url) {
        loginPage.open(url);
    }
    
    /**
     * Метод проверяет авторизацию
     */
    public checkIfWeLoggedIn() {
        expect(homePage.profileName).toBeVisible()
        expect(homePage.profileName).toHaveText(`Andrew Fuller`)
    }

    /**
     * Метод создает новоое сообщение и заполняет основные поля
     * @param subject string тема письма
     * @param text string само письмо
     */
    public createMsg(subject: string, text: string) {
        homePage.newMsg.click()
        homePage.who.click()
        homePage.addresat[0].waitForDisplayed()
        homePage.addresat[0].click()
        homePage.subject.setValue(subject)
        homePage.description.setValue(text)
    }
}
export const homeSteps = new HomeSteps()