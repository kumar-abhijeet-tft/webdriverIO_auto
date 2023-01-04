 Feature:  [BHC-T29 (1.0)] Verify that Loading page should not display before displaying error message, If user enters wrong credentials to login
  
   Scenario: [BHC-T29 (1.0)] Verify that Loading page should not display before displaying error message, If user enters wrong credentials to login
      Given User is on login page of the web communicator
      And Enter invalid credentials of a user
      When User clicks on Continue button
      Then Observe that Loading page does not display
      And Error message displays below the fields box Wrong username or password