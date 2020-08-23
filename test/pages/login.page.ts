import {page} from "./page";

/**
 * Страница авторизации
 */
class loginPage extends page {
    
    /**
     * Метод открывает ссылку
     * @param url string адрес для открытия
     */
    open (url: string) {
        return super.open(url);
    }
}
export {loginPage}