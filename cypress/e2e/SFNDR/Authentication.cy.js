import SignUp from "../ProjectObjectModel/SignupPage.js";
describe("SFNDR", () => {
  it("SignUp", () => {
    cy.visit("https://service-provider.amalitech-dev.net/pre-signup");
    cy.wait(2000);
    //  cy.screenshot("Signup page");
    cy.url().should("include", "/pre-signup");
    cy.title().should("contain", "SFNDR - Sevice Finder Provider");

    //it.skip('Sign-up as client', () =>{
    cy.get("#clientRole").click();
    cy.get("#clientRole").should("contain", "Client");

    cy.get("button[type='button']").click();
    cy.get("button[type='button']").should("contain", "Continue");

    //  using POM
    const ln = new SignUp();
    ln.setFullName(Abena_Dadzie);
    ln.setPhoneNumber("02495828476");
    ln.setEmail("abenadadzie57@gmail.com");
    ln.setPassword("abeNa123?");
    ln.setConfirmPassword("abeNa123?");
    ln.clickSubmit();
    ln.verifySignup();
    // });

    it.skip("Sign-up as provider", () => {
      //  cy.get("#providerRole").click();
      //  cy.get("#providerRole").should('contain','Provider');
      // cy.get("button[type='button']").click();
      // cy.get("button[type='button']").should('contain','Continue');
      //  cy.go('back');
      //  cy.title().should('eq','SFNDR - Sevice Finder Provider');
      //  cy.go('forward');
      //  cy.get("#providerRole").should('contain','Provider');
      // cy.reload();
    });
  });

  //  it.skip('SignIn', () =>{

  //        })
});
