describe('TIB Login Tests', () => {
    it('should successfully log in with valid credentials', () => {
        cy.loginToTIB('abenadadzie57@gmail.com', 'abeNa123?');
        
        // Additional assertions can go here, such as checking the presence of a dashboard
        cy.url().should('not.contain', '/login'); // Example of a post-login check


        cy.contains("Settings").click({force: true});
        cy.contains("Settings").should('be.visible');

     it.skip('It updates user profile', () => {
    
        cy.get("#username").clear().type('Abena Dadzie');
        cy.get("#username").should('be.visible');

        cy.get("#phoneNumber").clear().type('0265647392');
        cy.get("#phoneNumber").should('be.visible');


        cy.xpath("//select[@class='ng-untouched ng-pristine ng-valid']").select('EUR');
        cy.xpath("//select[@class='ng-untouched ng-pristine ng-valid']").should('have.value', 'Euro');

       

        cy.get(".update-btn").click({force:true});
        cy.get(".update-btn").should('contain','Update Profile');

    });
     
    it.skip('It changes password', () => { 
     cy.get(".update-password-section > .mdc-button > .mdc-button__label").click();
     cy.contains("Change Password").should('be.visible', true);
    
     cy.get("#currentPassword").type('abeNa123?')
     cy.get("#currentPassword").should('be.visible')

     cy.get("#newPassword").type('AbeNa123?')
     cy.get("#newPassword").should('be.visible')

     cy.get("#confirmNewPassword").type('AbeNa123?')
     cy.get("#confirmNewPassword").should('be.visible')

     cy.contains("Update").click();
     cy.contains("Update").should('be.visible');

})
 

 it.skip('It deletes the account', () =>{

    cy.contains("Delete Account").click();
    cy.contains("Delete Account").should('be.visible');
     
      cy.get("#mat-mdc-checkbox-1-input").check().should('be.checked');
     cy.get("#mat-mdc-checkbox-1-input").should('be.visible');

    
     cy.contains("No").click();
    cy.contains("No").should('be.visible');
    
 })


it.only('Log out', () =>{

cy.get(".mat-icon[role='button']").click({force: true});
cy.contains('Sign out').click();
cy.url().should('include', '/client/new-trip');
cy.get(".mat-icon[role='button']").should('be.visible');

// cy.contains('Cancel').should('be.visible')
// cy.contains('Cancel').click();

cy.get(".mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-warn.mat-mdc-button-base").should('be.visible')
cy.get(".mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-warn.mat-mdc-button-base").click({multiple: true})


 })

// it.skip('it set preference for email & push notification', () =>{

    cy.get(".mat-icon[role='button']").click({multiple: true});
    cy.contains("Profile").click();
    cy.url().should('include', '/settings');
    cy.get(".mat-icon[role='button']").should('be.visible');

    cy.get(".tabs > :nth-child(2)").click({force: true});
    cy.get(".tabs > :nth-child(2)").should('contain','Notification');

    cy.get("#mat-mdc-slide-toggle-1-button").should('not.be.checked');
    cy.get("#mat-mdc-slide-toggle-1-button").click({multiple: true});

    cy.get("#mat-mdc-slide-toggle-2-button").should('not.be.checked');
    cy.get("#mat-mdc-slide-toggle-2-button").click({multiple: true});


// })



    })
})