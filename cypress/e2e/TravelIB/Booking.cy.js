describe("Travel Itinerary Builder", () => {


    it("Booking", () => {

cy.visit("https://tib.amalitech-dev.net/home")
cy.url().should('contain', 'https://tib.amalitech-dev.net');

cy.contains("Login").click({force:true});
//cy.gets("a[routerlink='/login']").should('have.text','Login');
//cy.contains("Login").should('not.be.visible');


cy.get("input[type='email']").type("abenadadzie57@gmail.com");
    cy.get("input[type='email']").should('have.value',"abenadadzie57@gmail.com")
   
    cy.get("input[type='password']").type("abeNa123?");
    cy.get("input[type='password']").should('have.value',"abeNa123?")

    cy.get(".mdc-button__label").click({force:true});
    cy.get(".mdc-button__label").should('contain','Log In')
     
    //cy.get(".sidebar open").click();
    cy.contains("Booking").click();
    cy.contains("Booking").should('be.visible');

it.skip('Booking a Hotel', () => {

    cy.contains("Create a Booking").click({force:true});
    cy.contains("Create a Booking").should('be.visible');
    
    cy.contains("Hotel").click();
    cy.contains("Hotel").should('contain','Hotel');

    cy.get("input[placeholder='search...']").type("Dubai");
    cy.get("input[placeholder='search...']").should('have.value','Dubai')

    cy.get("#checkIn").type("08/09/2024");
    //cy.wait(5000);
    cy.get("#checkIn").should('be.visible');
    
    cy.get("#checkOut").type("08/25/2024");
    cy.get("#checkOut").should('be.visible');

    cy.get("#numTravelers").type("4")
    cy.get("#numTravelers").should('be.visible');

    cy.contains("Search").click();
    cy.contains("Search").should('contain','Search');

    cy.get(".cdk-overlay-container").click({force:true})
    cy.get('.close > .mat-icon').click({force:true})

    });


    cy.contains("Create a Booking").click({force:true});
    cy.contains("Create a Booking").should('be.visible');

cy.contains("Flight").click();
cy.contains("Flight").should('contain','Flight');

cy.get("#fromQuery").type("Ghana Kotoka International Airport")
cy.get("#fromQuery").should('be.visible');
//cy.get(".auto-suggest-class").contains("Ghana Kotoka International Airport").click();

cy.get("#toQuery").type("Dubai International Airport")
cy.get("#toQuery").should('have.value','Dubai International Airport')
//cy.get(".auto-suggest-class").contains("Dubai International Airport").click();

cy.get("#flightType").select('One Way');
cy.get("#flightType").should('be.visible');

cy.get("input[placeholder='mm/dd/yyyy']").type("08/15/2024")
cy.get("input[placeholder='mm/dd/yyyy']").should('be.visible')

cy.get("#seatType").select('Business')
cy.get("#seatType").should('contain','Business')

cy.contains("Search").click()
cy.contains("Search").should('be.visible')

cy.get(".cdk-overlay-container").click({force:true})
    cy.get('.close > .mat-icon').click({force:true})

    });

});