const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#identifierId');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnNext () {
        return $('#identifierNext');
    }

    // get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async login (username, password) {
        // let name_ele = await browser.$(LoginPageLocator.username);
        let inputUsername = "#identifierId"
        await browser.$(inputUsername).setValue(username);
        let btnNext = '#identifierNext';
        await browser.$(btnNext).click();
        let inputPassword = "//input[@name='password']"
        // await browser.pause(30000);
        await browser.$(inputPassword).click();
        await browser.$(inputPassword).setValue(password);
        await browser.$(btnNext).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
