import {homeSteps} from '../steps/homeSteps'
import * as faker from 'faker/locale/ru'
import * as assert from "assert";
import * as chai from "chai";

// ассерты
let ass = chai.assert;
let exp = chai.expect;
chai.should();

// Переменные теста
let url = `https://ej2.syncfusion.com/showcase/typescript/webmail/#/home`

describe('C1234577 Проверка отправки сообщения', function() {
    beforeEach(function() {
        
    })
    it('[ЧС] C1234577 Проходим авторизацию', function() {
        homeSteps.open(url)
        homeSteps.checkIfWeLoggedIn()
    });
    it('[ЧС] C1234577 Создаем письмо', function() {
        homeSteps.createMsg(`Тема письма для ` + faker.name.firstName(0), `Само письмо`)
    });
});