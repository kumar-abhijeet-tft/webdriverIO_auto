Feature: Performing a login

  Scenario: Login with Chat1
        Given I'm on the login page
        When I log in with Chat1
        Then I should be logged in

    # Examples:
    #   | username       | password        | message    |
    #   | tautomation551 | Tautomation@123 | Automation |

