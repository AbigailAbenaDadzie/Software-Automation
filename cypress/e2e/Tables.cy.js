describe("tables", () => {
   it("Handles Tables", () =>{
         cy.visit("https://demoqa.com/automation-practice-form")
         cy.wait(3000)
         cy.get(':nth-child(1) > .group-header > .header-wrapper').click()
         cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click()
         .each(($row, index, $rows) =>{
            cy.wrap($row).within(()=>{
                cy.get(".ReactTable -striped -highlight").each(($col, index, $cols) =>{

                })
            })
         })
    })
})