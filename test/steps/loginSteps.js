const loginPage = require('../pages/login.page');
const homePage = require('../pages/home.page');

class LoginSteps {
    open(url) {
        loginPage.open(url);
    }
    
    checkIfWeLoggedIn() {
        expect(homePage.profileName).toBeVisible()
        expect(homePage.profileName).toHaveText(`Andrew Fuller`)
    }

    login(login, pass) {
        loginPage.login(login, pass)
    }

    createMsg(subject, who, text) {
        homePage.newMsg.click();
        homePage.who.setValue(who)
        homePage.subject.setValue(subject)
        homePage.description.setValue(text)
    }
}
module.exports = new LoginSteps();