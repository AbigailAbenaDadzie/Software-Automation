describe("iframe", () => {
  it("handles iframe", () => {
    cy.visit("https://demoqa.com/sample");

cy.get('#sampleHeading')
.iframe()
.should('be.visible')
.then(cy.wrap);
  })
})
















