describe("Travel Itinerary Builder", () =>{

    it("Search and Explore", () =>{{

    cy.visit("https://tib.amalitech-dev.net/home");

    cy.url().should('contain','//tib.amalitech-dev.net/')

    cy.contains("Login").click({force:true});

    cy.get(".logo").should('be.visible')
    .and('exist')

    cy.get("input[placeholder='Enter your email']").type("abenadadzie57@gmail.com");
    cy.get("input[placeholder='Enter your email']").should('have.value',"abenadadzie57@gmail.com");

    cy.get("input[placeholder='Enter your password']").type("abeNa123?");
    cy.get("input[placeholder='Enter your password']").should('have.value','abeNa123?');

    //cy.get(".mdc-button__label").click({force:true});
    cy.get('.mdc-button__label > h4').click({force:true});


    cy.contains("Explore").click();
    cy.get('.sidebar > .general-actions > .general-nav-items > [href="/client/search-and-explore"] > .nav-item').should('contain','Explore');

    cy.get(".pac-target-input").click();
    cy.get(".pac-target-input").should('have.attr','placeholder', 'find a location at your destination');

    cy.get(".pac-target-input").type('Dubai');
   
    cy.get(".pac-container > :nth-child(2)").click();
    cy.get('.preference').click();
    //cy.get(':nth-child(2) > tib-trip-item-card > main > .trip-item-card-desc').should('be.visible').click();
    //cy.get(".trips-dropdown").click();

   cy.contains("movie_theater").click({force: true});
   cy.wait(3000)
   cy.get(':nth-child(3) > tib-trip-item-card > main').click({force:true});

}});
});