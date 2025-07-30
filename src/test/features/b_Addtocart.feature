Feature: Adding products to cart

  Background:
    Given User navigates to the application
    And User is on the login page

  Scenario Outline: Add a product to cart
    And user enters valid username as "<username>"
    And User enter valid password as "<password>"
    And User is on the homepage
    When User add a product to the cart
    Then User should see the product in the cart
    When User add a product to the cart
    Then User should see the product in the cart

Examples:
    | username | password |
    | standard_user | secret_sauce |