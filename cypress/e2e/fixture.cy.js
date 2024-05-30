describe("Assertion demo", () => {
  it("Fixtures", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.fixture("orangehrm").then((data) => {
      cy.get("input[placeholder='Username']").type(data.Username);
      cy.get("input[placeholder='Password']").type(data.Password);
      cy.get("button[type='submit']").click();
      cy.get(':nth-child(6) > .oxd-main-menu-item').click(data.expected);
      cy.wait(3000)
    });
  });
});
