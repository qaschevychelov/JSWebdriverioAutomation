import {Page} from "./page";

/**
 * Страница авторизации
 */
class LoginPage extends Page {
    
    /**
     * Метод открывает ссылку
     * @param url string адрес для открытия
     */
    open (url: string) {
        return super.open(url);
    }
}
export const loginPage = new LoginPage()