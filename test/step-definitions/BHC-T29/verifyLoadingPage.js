const { Given, When, Then } = require('@wdio/cucumber-framework');
import LoginPage from "../../pageobjects/login.page"

Given(/^User is on login page of the web communicator$/, async()=>{
    LoginPage.open("");
});

When(/^Enter invalid credentials of a user$/, async() => {
    await LoginPage.verifyBroadVoiceLogo();
    await LoginPage.enterUserName("122345@gmail.com")
});

When(/^User clicks on Continue button$/, async() => {
    await LoginPage.clickOnContinueBtn();
});

Then(/^Observe that Loading page does not display$/, async() => {
    await LoginPage.verifyErrorMsgAppear()
});


When(/^Error message displays below the fields box Wrong username or password$/, async() => {
    await LoginPage.verifyErrorMsgAppear()
});