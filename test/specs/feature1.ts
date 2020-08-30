import { homeSteps } from '../../app/steps/homeSteps';
import { Message } from '../../app/home/models/msg';

import * as faker from 'faker/locale/ru'
import * as assert from "assert";
import * as chai from "chai";

// ассерты
let ass = chai.assert;
let exp = chai.expect;
chai.should();

// Переменные теста
let url = `https://ej2.syncfusion.com/showcase/typescript/webmail/#/home`
let msg = new Message(
    'Тема письма для ' + faker.name.firstName(0),
    `Само письмо`
)

describe('Проверка отправки сообщения', function() {
    it('[ЧС] C1234577 Проходим авторизацию', function() {
        homeSteps.open(url)
        homeSteps.checkIfWeLoggedIn()
    });
    it.only('[ЧС] C1234577 Создаем письмо', function() {
        homeSteps.open(url)
        homeSteps.createMsg(msg)
    });
});