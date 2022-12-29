const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see account name (.*)$/, async (accountName) => {
//     await expect(SecurePage.accountName).toBeExisting();
//     await expect(SecurePage.accountName).toHaveTextContaining(accountName);
// });

Given(/^I'm on the login page$/, async()=>{
    await pages[page].open()
});

When(/^I log in with Chat1$/, async() => {
    await LoginPage.verifyBroadVoiceLogo();
    await LoginPage.loginWithChat1();
    
});

Then(/^I should be logged in$/, async() => {
    await Browser.pause(2000)
    expect(browser.getUrl()).to.equal('chat');
});

