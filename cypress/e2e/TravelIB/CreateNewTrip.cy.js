describe("create new trip", () => {
  it("implicit asssertion", () => {
    cy.visit("https://tib.amalitech-dev.net/home");
    cy.wait(3000);
    cy.get("a[routerlink='/login']").click();
    cy.get("input[placeholder='Enter your email']").type(
      "abenadadzie57@gmail.com"
    );
    cy.get("input[placeholder='Enter your password']").type("abeNa123?");
    cy.get(".mdc-button__label > h4").click();
    cy.get('.desktop-btn > .mdc-button__label').click();
    cy.get(".pac-target-input").type('Dubai')
    cy.get('#startDate').type('2024-07-24');
  });
});
