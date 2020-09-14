import { baseSteps } from "../../../app/android/steps/BaseSteps";

describe('Проверка запуска приложения!', function() {
    before(function () {
        phone1.setTimeout({implicit: 10000})
        phone2.setTimeout({implicit: 10000})
    });
    it('Запуск', function () {
        baseSteps.checkIfAppIsLaunched()
        baseSteps.goToMenu("Login", phone1)
        baseSteps.goToMenu("Forms", phone2)
        baseSteps.checkIfWeAreOnPage("Login / Sign up Form", phone1)
        baseSteps.checkIfWeAreOnPage("Form components", phone2)
    });
});