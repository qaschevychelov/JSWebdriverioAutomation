import { Message } from '../../../app/browsers/home/models/msg';
import { homeSteps } from '../../../app/browsers/steps/homeSteps';

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

describe('Проверка отправки сообщения 3', function() {
    it('[ЧС] C1234579 Проходим авторизацию', function() {
        homeSteps.open(url)
        homeSteps.checkIfWeLoggedIn()
    });
    it('[ЧС] C1234579 Создаем письмо', function() {
        homeSteps.open(url)
        homeSteps.createMsg(msg)
    });
});