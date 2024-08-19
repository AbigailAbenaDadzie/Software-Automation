describe('TIB Login Tests', () => {
    it('should successfully log in with valid credentials', () => {
        cy.loginToTIBasAdmin('super_admin@gmail.com', 'password');
        
        // Additional assertions can go here, such as checking the presence of a dashboard
        cy.url().should('contain', '/login'); // Example of a post-login check


cy.contains("Analytics").should('be.visible')
cy.contains("Analytics").click({force:true});


it.skip('It analytics', ()=> {
       cy.get(".btn-export").click();
       cy.get(".btn-export").should('contain','Export')

    // cy.get("img[src='../../../../../assets/nav-icons/admin/csv.svg']").click();

       cy.get("img[src='../../../../../assets/images/pdf-file.png']").click();

    cy.get(".mat-icon[role='img']").click();  
  }) 
  
  
    
// it.skip('It See All', ()=> {
        cy.get(".see-all-btn ng-tns-c1259876066-0").should('contain','See all')
        cy.get(".see-all-btn ng-tns-c1259876066-0").click()

        cy.xpath("//tbody/tr[1]/td[4]/button[1]").click()
        cy.xpath("//tbody/tr[1]/td[4]/button[1]").should('have.value','Details')

        cy.get(".close-btn").should('contain','ok')
        cy.get(".close-btn").click()


// })  






    })
})