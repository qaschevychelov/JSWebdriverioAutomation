import {homeSteps} from '../steps/homeSteps';
import * as fakerr from 'faker';

// объекты
let $homeSteps = new homeSteps();

// Переменные теста
let url = `https://ej2.syncfusion.com/showcase/typescript/webmail/#/home`

describe('[ЧС] C1234577 Проверка отправки сообщения', () => {
    it('[ЧС] C1234577 Проходим авторизацию', () => {
        $homeSteps.open(url)
        $homeSteps.checkIfWeLoggedIn()
    });
    it('[ЧС] C1234577 Создаем письмо', () => {
        $homeSteps.createMsg("Тема письма", `Само письмо`)
    });
});