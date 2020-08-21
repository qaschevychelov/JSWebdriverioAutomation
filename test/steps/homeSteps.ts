import {loginPage} from "../pages/login.page";
import {homePage} from "../pages/home.page";

let $loginPage = new loginPage();
let $homePage = new homePage();

class homeSteps {
    public open(url) {
        $loginPage.open(url);
    }
    
    public checkIfWeLoggedIn() {
        expect($homePage.profileName).toBeVisible()
        expect($homePage.profileName).toHaveText(`Andrew Fuller`)
    }

    public createMsg(subject, who, text) {
        $homePage.clickNewMsg();
        $homePage.setWho(who)
        $homePage.setSubject(subject)
        $homePage.setDescription(text)
    }
}
export {homeSteps}