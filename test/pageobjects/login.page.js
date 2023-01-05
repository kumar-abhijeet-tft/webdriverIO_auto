import Page from './page'

let broadVoiceLogo = "#prompt-logo-center";
let inputUserName = "#username";
let inputPassword = "#password";
let submitBtn = "//button[@type='submit']";
let errorMsg = "#error-element-password"

const user = require('../../Data/userData').chat1
class LoginPage extends Page{

    open(path) {
        super.open(path)
        browser.pause(2000);
    }

    async verifyBroadVoiceLogo() {
        await $(broadVoiceLogo).waitForDisplayed()
        await expect($(broadVoiceLogo)).toBeExisting()
    }

    async loginWithChat1 () {
        await (await $(inputUserName)).click();
        await (await $(inputUserName)).setValue(user.username);
        await (await $(submitBtn)).click();
        await (await $(inputPassword)).setValue(user.password);
        await (await $(submitBtn)).click();
    }

    async enterUserName (email){
        await (await $(inputUserName)).click();
        await (await $(inputUserName)).setValue(email);
        await (await $(submitBtn)).click();
    }

    async enterPassword (pswd){
        await (await $(inputPassword)).click();
        await (await $(inputPassword)).setValue(pswd);
        await (await $(submitBtn)).click();
    }

    async clickOnContinueBtn () {
        await (await $(submitBtn)).click()
    }

    async verifyErrorMsgAppear () {
        await $(errorMsg).waitForDisplayed()
        await expect($(errorMsg)).toBeExisting()
    }
    
}

export default new LoginPage()

//base action, page object, feature, step definition, reporter, Utilities, configuration, readme, hooks(before, After)
