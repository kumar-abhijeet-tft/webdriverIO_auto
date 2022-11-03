Feature: Performing a login

  Background:
    Given I am on the login page

  Scenario: Log in with a user
    When I login with <username> and <password>
    Then I should see account name <message>

    Examples:
      | username       | password        | message    |
      | tautomation551 | Tautomation@123 | Automation |
# | foobar   | barfoo               | Your username is invalid!      |
