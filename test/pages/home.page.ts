import {page} from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homePage extends page {
    /**
     * define selectors using getter methods
     */
    get profileName() { return $('//*[@id="btnLoginName"]') }

    get newMsg() {return $(`//*[@id='e-tbr-btn_0']//*[normalize-space(.)='New']`)}

    get who() {return $(`//*[*[@id='autoTo']]/input[@class='e-dropdownbase']`)}

    get subject() {return $(`//input[@id='txtSubject']`)}
    
    get description() {return $(`//div[@id='mailContentMessage']`)}

    setWho(name: String) {
        this.who.setValue(name)
    }

    setSubject(subj: String) {
        this.subject.setValue(subj)
    }

    setDescription(desc: String) {
        this.description.setValue(desc)
    }

    clickNewMsg() {
        this.newMsg.click()
    }
}
export {homePage}