describe('TIB Login Tests', () => {
    it('should successfully log in with valid credentials', () => {
        cy.loginToTIBasAdmin('super_admin@gmail.com', 'password');
        
        // Additional assertions can go here, such as checking the presence of a dashboard
        cy.url().should('contain', '/login'); // Example of a post-login check

    cy.contains("Manage Users").should('be.visible');
    cy.contains("Manage Users").click(); 

    // cy.get("input[placeholder='Search by email']").type('abenadadzie57@gmail.com');
    // cy.get("input[placeholder='Search by email']").should('be.visible');


it.skip("It Adds user", () =>{ 
    cy.contains("Add User").should('be.visible');
    cy.contains("Add User").click();

    cy.get("#email").type('herdisoydo@gufum.com');
    cy.get("#email").should('be.visible');

    cy.get("#role").select('Admin');
    cy.get("#role").should('be.visible');

    cy.get(".modal-actions").click();
    cy.get(".modal-actions").should('contain','Invite')

    cy.get(".close").click({force:true});
    cy.get(".close").should('be.visible');
})


// it.skip('Change role', () => {

//cy.get("body > tib-root:nth-child(1) > tib-layout:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > tib-manage-users:nth-child(2) > main:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) > mat-icon:nth-child(2)").click();
// cy.xpath("//tbody/tr[3]/td[2]/div[1]/mat-icon[1]").click()
// cy.contains('Admin').click();
//cy.contains('Admin').should('have.value','Admin')





// })


//it.skip('Change Status', () => {
    // cy.get("#mat-mdc-slide-toggle-2-button").should('not.be.checked');
    // cy.get("#mat-mdc-slide-toggle-2-button").click();
//})

// it.skip('Deletes User', () => {
    cy.xpath("//tbody/tr[2]/td[4]/img[1]").click({multiple: true});
    cy.xpath("//tbody/tr[2]/td[4]/img[1]").should('be.visible');

    // cy.contains("Cancel").click();
    // cy.contains("Cancel").should('be.visible');

    cy.contains("Delete").click();
    cy.contains("Delete").should('contain','Delete');

    cy.get(".close").click({force:true});
    cy.get(".close").should('be.visible');




// })


    })
})