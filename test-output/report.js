$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/EbayFeature/EbayInventoryFeature.feature");
formatter.feature({
  "name": "This is to test the inventory pge for Ebay",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing inventory page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayStepDefinitions.EbayStepDefinitions.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user types an item in the searchbar",
  "keyword": "When "
});
formatter.match({
  "location": "EbayStepDefinitions.EbayStepDefinitions.the_user_types_an_item_in_the_searchbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks enter",
  "keyword": "And "
});
formatter.match({
  "location": "EbayStepDefinitions.EbayStepDefinitions.clicks_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user will be  on the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayStepDefinitions.EbayStepDefinitions.the_user_will_be_on_the_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});