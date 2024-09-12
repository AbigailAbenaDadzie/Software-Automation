import SignupPage from "../POM/SignupPage";
import LoginPage from "../POM/LoginPage";
describe ("Signing Up as a provider", () => {
    it("Pro Actions", () =>{
   cy.visit("https://service-provider.amalitech-dev.net/")
    
   cy.url().should("include", "/service-provider");
   cy.title().should("contain", "SFNDR - Sevice Finder Provider");

   cy.xpath("//a[text()='Sign up']").click({force: true});
   cy.wait(2000)
//    cy.xpath("//a[text()='Sign up']").should('contain','Sign up');

 cy.wait(5000)

    //it("Sign-up as provider", () => {
      cy.get("#providerRole").click({force: true});
      cy.get("#providerRole").should("contain", "Provider");

      cy.get("button[type='button']").should("contain", "Continue");
      cy.get("button[type='button']").click();
      

    //   cy.go("back");
    //   cy.title().should("eq", "SFNDR - Sevice Finder Provider");

    //   cy.go("forward");
    //   cy.get("#providerRole").should("contain", "Provider");
    //   cy.reload();

      //using fixtures with POM
      cy.fixture("SFNDR").then((data) => {
        const ln = new SignupPage();
        ln.setFullName(data.fullName);
        ln.setEmail(data.email);
        ln.setPassword(data.password);
        ln.setConfirmPassword(data.password);
        ln.clickLogin();
        


        //using POM for Log  In
    cy.contains("Sign in").click();
    cy.contains("Sign in").should('be.visible')


    const Ln = new LoginPage();
    Ln.setEmail(data.email);
    Ln.setPassword(data.password);
    Ln.clickLogin();
    cy.url().should('include','https://service-provider.amalitech-dev.net/pro-dashboard')


    cy.contains("Requests").click();
    cy.contains("Requests").should('be.visible')

    cy.contains("Projects").click();
    cy.contains("Projects").should('be.visible')

    cy.contains("Services").click();
    cy.contains("Services").should('be.visible')



//Page not found
    // cy.contains("Scheduling").click();
    // cy.contains("Scheduling").should('be.visible')
    //7cy.get('.text-center').click();

    cy.contains("Appointments").click();
    cy.contains("Appointments").contains('Appointments')


    cy.contains("Settings").click();
    cy.contains("Settings").should('be.visible')

























      });
    });
  });
//});
  
