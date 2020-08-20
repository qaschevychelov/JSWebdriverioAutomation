const loginSteps = require('..\\steps\\loginSteps');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        loginSteps.open()
        loginSteps.login("tomsmith", 'SuperSecretPassword!')
        loginSteps.checkIfWeLoggedIn()
    });
});