Feature: This is to test the inventory pge for Ebay

  Background:
  Scenario Outline: Testing inventory page
    Given User is on the homepage
    When The user types an "<item>" in the searchbar
    And clicks enter
    Then The user will be  on the search results page

    Examples:
     |item|
     |mug |
     |iPhone|
     |books |



