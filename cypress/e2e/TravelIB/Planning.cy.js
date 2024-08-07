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

    cy.contains("Planning").click();
    cy.get(".mat-mdc-select-placeholder").click();
    cy.get(".mat-mdc-select-arrow").click();
 




    }});
});