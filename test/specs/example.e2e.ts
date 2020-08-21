import {homeSteps} from '../steps/homeSteps';

// Переменные теста
let url = `https://ej2.syncfusion.com/showcase/typescript/webmail/#/home`
let $homeSteps = new homeSteps();

describe('[ЧС] C1234577 Проверка отправки сообщения', () => {
    it('[ЧС] C1234577 Проходим авторизацию', () => {
        $homeSteps.open(url)
        $homeSteps.checkIfWeLoggedIn()
    });
    it('[ЧС] C1234577 Создаем письмо', () => {
        $homeSteps.createMsg(`Тестовое письмо`, `qa.schevychelov@gmail.com`, `Само письмо`)
    });
});