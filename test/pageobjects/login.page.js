const { default: $ } = require('webdriverio/build/commands/browser/$');
const { chat1 } = require('../../Data/userData');
const Page = require('./page');
const { user } = require('../../Data/userData').chat1


let broadVoiceLogo = "#prompt-logo-center";
let inputUserName = "#username";
let inputPassword = "#password";
let submitBtn = "//button[@type='submit']";


class LoginPage extends Page {

    async verifyBroadVoiceLogo() {
        await expect($(broadVoiceLogo)).toBeExisting()
    }

    async loginWithChat1 () {
        await (await $(inputUserName)).click();
        await (await $(inputUserName)).sendKeys({ emailID:user.username });
        await (await $(submitBtn)).click();
        await (await $(inputPassword)).sendKeys({ pswd: user.password});
        await (await $(submitBtn)).click();
    }

    
}

module.exports = new LoginPage();


//base action, page object, feaeture, step definition, reporter, Utilities, configuration, readme, hooks(before, After)
