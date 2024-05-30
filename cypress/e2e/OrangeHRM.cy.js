//const { Assertion } = require("chai");
//const cypress = require("cypress");
//const { describe } = require("mocha");

describe("Assertion demo", () => {
  it("implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.wait(3000);
    cy.url().should("include", "https://opensource-demo.orangehrmlive");
    cy.url().should("contain", "opensource-demo.orangehrmlive");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url().should("not.eq", "https://opensourc-demo.orangehrm.com/web");

    cy.get("input[placeholder='Username']").type("Admin");

    cy.get("input[placeholder='Username']").should("have.value", "Admin");

    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("input[placeholder='Password']").should("have.value", "admin123");
  });

  it("explicit assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(3) > .oxd-main-menu-item').click();

    //     let expName="Ram user";
    // cy.get(".oxd-userdropdown-tab").then(  (x)=> {

    //   let actualName=x.text();

    //   //BDD
    //  expect(actualName).to.equals(expName)
    //  expect(actualName).to.notequals(expName)

    //   //TDD
    // assert.equal(actName,expName)
    // assert.notEqual(actName,expName)

    // })
  });
});
