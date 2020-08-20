const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

class LoginSteps {
    open() {
        LoginPage.open();
    }
    checkIfWeLoggedIn() {
        expect(SecurePage.flashAlert).toBeVisible()
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    }

    login(login, pass) {
        LoginPage.login(login, pass)
    }
}
module.exports = new LoginSteps();