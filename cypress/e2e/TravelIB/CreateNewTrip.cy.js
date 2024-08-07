describe("Travel Itinerary Builder", () => {
  it("Create New Trip", () => {

    cy.visit("https://tib.amalitech-dev.net/home");
    //cy.wait(3000);
    cy.url().should('include', 'https://tib.amalitech')
   cy.url().should('equal','https://tib.amalitech-dev.net/home')
   
   
    cy.get("a[routerlink='/login']").click();
    //cy.get("a[routerlink='/login']").should('have.value',"a[routerlink='/login']")

    cy.get("[placeholder='Enter your email']").eq(0).type(
      "abenadadzie57@gmail.com"
    );
    //cy.get("[placeholder='Enter your email']").should('have.value',"vugnivitru@gufum.com")

    cy.get("input[type='password']").type("abeNa123?");
    //cy.contains('Log In').click()
    cy.get(".mdc-button__label > h4").click();


    //To creat a new trip
    //cy.wait(1000);a
    //cy.contains('Log In').eq(1).click()
    cy.get(".desktop-btn > .mdc-button__label").click();
    cy.get(".pac-target-input").type("Dubai");
    cy.get(".pac-container > :nth-child(1)").click();
    cy.get("#startDate").type('2024-08-02')
    cy.get('#endDate').type('2024-08-10')
    cy.contains("Save").click({force: true});


    //To edit an existing trip
    cy.get(':nth-child(1) > .image > .more > .mat-icon').click();
    cy.contains('Edit').click();
    cy.get("#startDate").type('2024-08-21')
    cy.get('#endDate').type('2024-08-25')
    cy.get("button[class='mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base'] span[class='mat-mdc-button-touch-target']").click({force:true});


    //To delete an existing trip
    cy.get(':nth-child(2) > .image > .more > .mat-icon').click();
    cy.contains("Delete").click();
    cy.get('.mat-warn > .mat-mdc-button-touch-target').click({force:true});
    //cy.get(".cancel > .mat-mdc-button-touch-target").click({force: true});
    

    //To add a tripmate
    cy.get(':nth-child(3) > .image > .more > .mat-icon').click();
    cy.contains("Add Tripmate").click({force: true});
    cy.contains("Copy Invite Link").click();
    cy.get('.close > .mat-icon').click();
    //cy.get("#email").type("emmanuel.asabere@amalitech.com");
    //cy.get("button[class='mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base'] span[class='mat-mdc-button-touch-target']").click({force: true});
  });
});
