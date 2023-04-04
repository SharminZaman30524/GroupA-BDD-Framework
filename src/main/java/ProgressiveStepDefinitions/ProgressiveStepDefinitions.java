package ProgressiveStepDefinitions;

import EbayPages.EbayHomepage;
import common.WebAPI;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class ProgressiveStepDefinitions extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(  false,
                "browserstack",
                "windows", "11",
                "chrome",
                "111",
                "https://www.ebay.com/");

    }
    @After
    public void closeBrowser(){
        cleanUp();
    }
    static EbayHomepage ebayHomepage;
    public static void getInitElements(){ebayHomepage= PageFactory.initElements(driver,EbayHomepage.class);}

    @Given("User is on the homepage")
    public void user_is_on_the_homepage() {
     getInitElements();
    }

    @When("The user types an item in the searchbar")
    public void the_user_types_an_item_in_the_searchbar(String item) {
        getInitElements();
        ebayHomepage.typeItem(item);
    }

    @When("clicks enter")
    public void clicks_enter() {
        getInitElements();
        ebayHomepage.searchAnItem();
    }

    @Then("The user will be  on the search results page")
    public void the_user_will_be_on_the_search_results_page() {
       getInitElements();
       driver.getTitle();
    }
}


