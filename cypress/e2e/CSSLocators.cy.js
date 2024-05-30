
describe('CSSLocators', () => {

    it('csslocators', () => {

        cy.visit("https://demo.opencart.com/index.php")

        cy.get("#Search").type("MacBook")

        cy.get("[name='submit_search']").click()

        cy.get(".lighter").contains("MacBook")
    })
    })