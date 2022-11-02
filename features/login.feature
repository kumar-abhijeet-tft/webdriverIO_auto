Feature: Performing a login

  Background: 
    Given I am on the login page

    Scenario: Log in with a user 
    When I login with <tautomation551@gmail.com> and <Tautomation@123>
    Then I should see account name <Automation>

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
