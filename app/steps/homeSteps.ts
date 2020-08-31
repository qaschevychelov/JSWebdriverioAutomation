import { loginPage } from "../home/pages/login.page";
import { homePage } from "../home/pages/home.page";
import { Message } from "../home/models/msg";
import allureReporter from '@wdio/allure-reporter'

class HomeSteps {
    public open(url: string) {
        allureReporter.addStep(`Открываем адрес ${url}`)
        loginPage.open(url);
    }
    
    /**
     * Метод проверяет авторизацию
     */
    public checkIfWeLoggedIn() {
        allureReporter.addStep(`Проверяем авторизацию`)
        expect(homePage.profileName).toBeVisible()
        expect(homePage.profileName).toHaveText(`Andrew Fuller`)
    }

    /**
     * Метод создает новоое сообщение и заполняет основные поля
     * @param msg Message письмо
     */
    public createMsg(msg: Message) {
        allureReporter.addStep(`Создаем письмо с темой '${msg.subject}' и телом '${msg.message}'`)
        homePage.newMsg.click()
        homePage.newMsg.waitForInvisible()
        homePage.who.waitForDisplayed()
        homePage.clickWho()
        homePage.addresat[0].click()
        homePage.subject.setValue(msg.subject)
        homePage.description.setValue(msg.message)
    }
}
export const homeSteps = new HomeSteps()