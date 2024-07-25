describe("Travel Itinerary Builder", () => {
    it("implicit assertion ", () => {
      cy.visit("https://tib.amalitech-dev.net/home");
      cy.url().should("include", "https://tib.amalitech-dev.net")
       cy.wait(3000);
      cy.get('ul > :nth-child(2) > .mdc-button > .mdc-button__label').click();
      cy.get('[label="Username"] > .input > .ng-untouched').type("Lalm");
      cy.get("input[placeholder='Enter your email']").type("lalmapirte@gufum.com");
      cy.get('.ng-pristine').type("laaHgs123?");
      cy.get('.mdc-button__label > h4').click();
      cy.get('a').click();
      cy.get("input[placeholder='Enter your email']").type("abenadadzie57@gmail.com");
      cy.get("input[placeholder='Enter your password']").type("abeNa123?");
      cy.get(".mdc-button__label > h4").click();
      
});
  
    
  });
  