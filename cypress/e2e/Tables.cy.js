describe("Tables", () => {
    it("Handles Tables", () => {
      cy.visit("https://demoqa.com/automation-practice-form");
  //cy.wait(3000)
  cy.get(':nth-child(1) > .group-header > .header-wrapper').click();
  cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click();
      
          });


          //it("Checking the num of rows and columns", () => {
            cy.get('.col-md-6').within(() => {
                //cy.get(".rt-tr-group").should('have.length','10');

                //cy.get(".rt-tr.group").first().find(".rt.td").should('have.length','6')
            //})
          })
        });