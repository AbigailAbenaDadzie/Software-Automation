describe('TLIB', () =>{
it('Handles child tabs', () =>{

    cy.visit("https://tib.amalitech-dev.net/home");//Parent element
     
    cy.get('.example >a').invoke('removeAttr','target').click();

    cy.url().should.eql('https://tib.amalitech-dev.');

    cy.go('back');


})
})