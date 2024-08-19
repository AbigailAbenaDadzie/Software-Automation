describe('TIB Login Tests', () => {
    it('should successfully log in with valid credentials', () => {
        cy.loginToTIBasAdmin('super_admin@gmail.com', 'password');
        
        // Additional assertions can go here, such as checking the presence of a dashboard
        cy.url().should('contain', '/login');


        cy.contains("Announcements").click();
        cy.contains("Announcements").should('be.visible')

it.skip('It create announcements', () => {

      cy.contains("Create Announcement").click({multiple:true});
      cy.contains("Create Announcement").should('be.visible');

      cy.get("#subject").type('Exciting Updates to Your Travel Itinerary Builder!');
      cy.get("#subject").should('be.visible');
  
      cy.get("#message").type('Dear Travelers, We are thrilled to announce some fantastic new features and improvements to enhance your trip-planning experience with the Travel Itinerary Builder! Whether you’re organizing a weekend getaway or a world tour, these updates are designed to make your journey planning smoother and more intuitive.')
      cy.get("#message").should('be.visible');

      cy.contains("Submit").click();
      cy.contains("Submit").should('be.visible');

})

// it.skip('it deletes announcements', () => {

cy.get(".delete-btn").click();




// })



    })
})