import LoginPage from "../POM/LoginPage"
describe ("Signing Up as a provider", () => {
    it("Pro Actions", () =>{
   cy.visit("https://service-provider.amalitech-dev.net/")
    
   cy.url().should("include", "/service-provider");
   cy.title().should("contain", "SFNDR - Sevice Finder Provider");

   cy.contains("Log in").click({force: true});


cy.fixture("AdminSFNDR").then((data) =>{
    const logIn= new LoginPage(data)
    logIn.setEmail(data.Email)
    logIn.setPassword(data.Password)
    logIn.clickLogin()
})

cy.contains("Pro Accounts").click();

cy.contains("User Accounts").click();

cy.contains("Manage Project").click();
cy.wait("2000")
cy.get("input[placeholder='Search by project name ....']").click();


cy.get('tbody > :nth-child(1) > :nth-child(1)').click();
    })
})