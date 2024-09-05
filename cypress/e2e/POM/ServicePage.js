class ServicePage{

    selectService()
    {
        cy.contains("Service page").click();
        
    }

    selectProvider()
    {
        cy.get(':nth-child(1) > .flex-col > .h-\[248px\] > .w-full').click({force:true});
    }

    clickRequestQuote()
    {
        cy.contains("Request Quote").click();
    }

    details()
    {
        cy.get("#details").type('Home Painting');
    }

    requirements()
    {
        cy.get("#requirements").type('Cleaning to be done for a renovated house');
    }

    desiredTimeframe()
    {
        cy.get("#desiredTimeframe").type('2024-09-04')
    }

    instructions()
    {
        cy.get("#instructions").type('Need neat cleaning')
    }

    submitRequest()
    {
        cy.get("button[type=submit]").click();
    }


}
export default ServicePage;