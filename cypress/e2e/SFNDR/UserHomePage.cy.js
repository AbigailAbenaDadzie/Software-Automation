import HomePage from "../POM/Homepage";
import LoginPage from "../POM/LoginPage";
describe ("Homepage", () => {
    it("Search for a service", () =>{
   cy.visit("https://service-provider.amalitech-dev.net/")
    
   const ln = new HomePage();
   const Ln = new LoginPage();
   ln.setSearch("Plumber");
   ln.setLocation("Accra");
   cy.wait(2000);
   ln.clickSubmit();
   ln.clickHome();
   ln.setLogin();
   Ln.setEmail("cepsazakni@gufum.com");
   Ln.setPassword("abeNa123?");
   Ln.clickLogin();


        })
})
