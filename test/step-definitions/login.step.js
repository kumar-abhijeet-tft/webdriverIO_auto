const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');

Given(/^I'm on the login page$/, async()=>{
    await LoginPage.openURL("");
});

When(/^I log in with Chat1$/, async() => {
    await LoginPage.verifyBroadVoiceLogo();
    await LoginPage.loginWithChat1();
    
});

Then(/^I should be logged in$/, async() => {
    await expect(browser).toHaveUrlContaining('chat');
});

