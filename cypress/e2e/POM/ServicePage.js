class ServicePage{

    selectService()
    {
        cy.contains("Service page").click({force:true});
        
    }

    selectProvider()
    {
        cy.contains("Exceptional").should("be.visible").click({force:true});
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
        cy.get("#desiredTimeframe").type('2017-06-01T08:30')
    }

    instructions()
    {
        cy.get("#instructions").type('Need neat cleaning')
    }

    submitRequest()
    {
        cy.get("button[type=submit]").click();
    }

    close()
    {
        cy.get(".fixed.top-0.left-0.w-screen.h-screen.bg-black.opacity-40.z-50.ng-star-inserted").click({force:true});
    }

}
export default ServicePage;