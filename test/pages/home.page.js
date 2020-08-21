const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get profileName() { return $('//*[@id="btnLoginName"]') }

    get newMsg() {return $(`//*[@id='e-tbr-btn_0']//*[normalize-space(.)='New']`)}

    get who() {return $(`//*[*[@id='autoTo']]/input[@class='e-dropdownbase']`)}

    get subject() {return $(`//input[@id='txtSubject']`)}
    
    get description() {return $(`//div[@id='mailContentMessage']`)}
}

module.exports = new HomePage();