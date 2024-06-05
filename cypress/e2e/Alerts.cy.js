describe("Alerts", () => {
  it.only("Handles alerts", () => {
    cy.visit("https://demoqa.com/alerts");

    // Alert
    cy.contains("button", "Click me").click();

    cy.on("window:alert", (alertText) => {
      // intercept and Assert that the alert contains the expected text
      expect(alertText).to.equal("You clicked a button");
    });

    //confirmation alert
    cy.contains("button", "Click me").click(); 

    cy.on("window:confirm", (confirmText) => {
      expect(confirmText).to.equal("Do you confirm action?");
      return true; // Return true to accept the confirmation
    });

    //Prompt alert
    cy.contains("button", "Click me").click();

    cy.on("window:prompt",(promtText) => {
      expect(promtText).to.equal("Do you confirm action?")
      return true;
  });
    
  });
});

describe("HRM Alerts", () => {
  it("Handles HRM alerts", () => {
    //visit the orange HRM page
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.wait(3000);
    //Enters invalid credentials
    cy.get("input[placeholder='Username']").type("admin");
    cy.get("input[placeholder='Password']").type("admin12");
    //then clicks on the login button
    cy.get("button[type='submit']").click();
    //this line interepts and handles the alerts
    cy.on("window:alert", (alertText) => {
      //assert that the alert is equals to this text'Invalid Credentials'
      expect(alertText).to.equal("Invalid Credentials");
    });
  });
});
