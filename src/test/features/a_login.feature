Feature: login

  Background:
    Given User navigates to the application
    And User is on the login page

  Scenario: Login with valid credentials
    When user enters valid username as "standard_user"
    And User enter valid password as "secret_sauce"
    Then User should be redirected to the home page

  Scenario: Login with invalid credentials
    When user enters invalid in_username as "invalid_user"
    And User enter invalid in_password as "invalid_password"
    Then User should see an error message
