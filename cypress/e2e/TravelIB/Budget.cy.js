describe('TIB Login Tests', () => {
    it('should successfully log in with valid credentials', () => {
        cy.loginToTIB('abenadadzie57@gmail.com', 'abeNa123?');
        
        // Additional assertions can go here, such as checking the presence of a dashboard
        cy.url().should('not.contain', '/login'); // Example of a post-login check


        cy.contains("Budget").click();
        cy.contains("Budget").should('be.visible');

 it.skip('Set Budget', () => {
    cy.contains("Set budget").click();
    cy.contains("Set budget").should('have.text','Set budget');
 
    cy.get("#budget").type('(900026');
    cy.get("#budget").should('have.attr','placeholder','Enter your budget');

    cy.contains("Save").click();
    cy.contains("Save").should('be.visible');
  });


  it.skip('Update budget', ()=>{

    cy.get(".other1").click();
    cy.get(".other1").should('be.visible');
    
    cy.get("#budget").clear().type('(5007887 {enter}');
     cy.get("#budget").should('have.attr','placeholder','Enter your budget');
     
   })

it.only('Checks Budget History', () => {

    cy.get(".other")
    .should('be.visible')
    .and('not.be.disabled')
    .click();

    cy.get("input[placeholder='Search by trip name']").type('Vietnam {enter}');
    cy.get("input[placeholder='Search by trip name']").should('have.attr','placeholder','Search by trip name');

    cy.get(".back")
    .should('be.visible')
    .and('not.be.disabled')  // Ensure it's clickable
    .click();
})
  

it.skip('Add Expenses', () =>{

    cy.contains("Add Expense").click();
    cy.contains("Add Expense").should('contain','Add Expense')

    cy.get("#item").select("Food");
    cy.get("#item").should('contain','Food');

    cy.get("#costOfItem").type('6000')
    cy.get("#costOfItem").should('be.visible');

    cy.get("#dateOfPayment").type('2024-08-29');
    cy.get("#dateOfPayment").should('be.visible');

    cy.get("#description").type("This expense covers the amount to be spent on Food");
    cy.get("#description").should('be.visible');


    cy.get(".modal-actions > .mdc-button > .mat-mdc-button-touch-target").click({ force: true });
    //cy.get(".modal-actions > .mdc-button > .mat-mdc-button-touch-target")
      //.should('contain', 'Add Expense'); 

      cy.get(".close").click({force:true});
      cy.get(".close").should('be.visible')

   })   

      //It editing 
   it.skip('it editing expense', () =>{
      cy.get(':nth-child(2) > .expense-card > .actions > [src="../../../../../assets/icons/Vector.svg"]').click({force:true});

      cy.get("#item").select("Drink");
    cy.get("#item").should('have.value','Drink');

    cy.get("#costOfItem").clear().type('4000')
    cy.get("#costOfItem").should('be.visible');

    cy.get("#dateOfPayment").type('2024-08-20');
    cy.get("#dateOfPayment").should('be.visible');

    cy.get("#description").type("Expense for Drink");
    cy.get("#description").should('be.visible')

    cy.xpath("//span[normalize-space()='Update']").click({force: true});
    cy.xpath("//span[normalize-space()='Update']").should('be.visible');
})   


//It deletes an expense
//it.skip('It deletes an expense', () =>{
    cy.get(':nth-child(4) > .expense-card > .actions > [src="../../../../../assets/icons/trash.svg"]').click();

    // cy.contains("Cancel").click()
    // cy.contains("Cancel").should('have.text','Cancel');

    cy.get(".mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-warn.mat-mdc-button-base").click();
    cy.get(".mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-warn.mat-mdc-button-base").should('be.visible');



//})


    });
});

