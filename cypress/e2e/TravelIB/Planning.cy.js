describe("Travel Itinerary Builder", () =>{

    it("Search and Explore", () =>{{

    cy.visit("https://tib.amalitech-dev.net/home")
    cy.url().should('contain', 'https://tib.amalitech-dev.net')

    cy.contains("Login").click({force:true});

    cy.get("input[type='email']").type("abenadadzie57@gmail.com");
    cy.get("input[type='email']").should('have.value',"abenadadzie57@gmail.com")
   
    cy.get("input[type='password']").type("abeNa123?");
    cy.get("input[type='password']").should('have.value',"abeNa123?")

    cy.get(".mdc-button__label").click({force:true});

    //cy.get(".google-button").click({force:true});

    cy.xpath("//tib-sidebar//p[contains(text(),'Planning')]")
    //cy.contains("Planning").should('be.visible').click({force:true})
      .should('exist')// Check if the element is visible
      .click({force:true}); 
    
      //cy.get("#mat-option-8").click();
      cy.get("#mat-option-9").click({force:true}); 
 
      cy.get(".1723161600000_11:00").click();
      cy.get(".cdk-overlay-container").click();
      cy.get("td[id='1723075200000_11:00'] img").click({force:true});

      cy.get(".mdc-button__label").click();
      cy.get(".mdc-button__label").should('have.value','Cancel')

      cy.get(".mdc-button__label").click();
      cy.get(".mdc-button__label").should('have.value','Delete');

    }});
});