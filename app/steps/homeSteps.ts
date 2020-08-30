import { loginPage } from "../home/pages/login.page";
import { homePage } from "../home/pages/home.page";
import { Message } from "../home/models/msg";

class HomeSteps {
    public open(url: string) {
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
     * @param msg Message письмо
     */
    public createMsg(msg: Message) {
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