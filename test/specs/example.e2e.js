const loginSteps = require('..\\steps\\loginSteps');

// Переменные теста
let url = `https://ej2.syncfusion.com/showcase/typescript/webmail/#/home`

describe('[ЧС]C1234577 Проверка отправки сообщения', () => {
    it('Проходим авторизацию', () => {
        loginSteps.open(url)
        loginSteps.checkIfWeLoggedIn()
    });
    it('Создаем письмо', () => {
        loginSteps.createMsg(`Тестовое письмо`, `qa.schevychelov@gmail.com`, `Само письмо`)
    });
});