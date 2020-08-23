import {homeSteps} from '../steps/homeSteps'
import * as faker from 'faker/locale/ru'
import * as assert from "assert";
import * as chai from "chai";

// ассерты
let ass = chai.assert;
let exp = chai.expect;
let should = chai.should;

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
        $homeSteps.createMsg(`Тема письма для ` + faker.name.firstName(0), `Само письмо`)
    });
});