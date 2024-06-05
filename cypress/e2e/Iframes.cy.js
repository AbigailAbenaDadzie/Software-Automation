describe("Assertion demo with iframes", () => {
  it.skip("Handles Iframes", () => {
    cy.visit("https://demoqa.com/sample");
    cy.wait(3000);

    // Switch to iframe with the custom command
    cy.getIframeBody('#frame1').then((iframeBody) => {
      // Perform actions within the iframe
      iframeBody.find('body').should('contain.text', 'This is a sample page'); // Example assertion
    });

    // If you have another iframe on the same page
    cy.getIframeBody('#frame2').then((iframeBody) => {
      // Perform actions within the second iframe
      iframeBody.find('body').should('contain.text', 'This is another sample page'); // Example assertion
    });
  });
});





describe("Iframe",() => {

  it("Handles iframes",() => {

    cy.visit("https://demoqa.com/sample")

    cy.get("#sampleHeading")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
  })
})