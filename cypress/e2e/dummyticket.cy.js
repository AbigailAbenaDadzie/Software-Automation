/// <reference types="cypress" />
describe("dummyticket", () => {
  it("Radio Buttons", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.url().should("include", "dummyticket.com");

    cy.get("#product_3186[type='radio'][value='3186']").check({ force: true });
    cy.get("#travname").type("Abigail Abena");
    cy.get("#travlastname").type("Dadzie");
    cy.get("#dob").click();
    cy.get(".ui-datepicker-month").select("Jan");
    cy.get(".ui-datepicker-year").select("2002");
    cy.get(".ui-datepicker-calendar").contains("21").click();
    cy.get("#sex_2[type='radio'][value='2']").check({ force: true });
    cy.get("#addmorepax[type='checkbox']").check({ force: true });
    cy.get("#traveltype_2[type='radio'][value='2']").check({ force: true });
    cy.get("#fromcity").type("Takoradi");
    cy.get("#tocity").type("Accra");
    cy.get("#departon").click();
    cy.get(".ui-datepicker-year").select("2024");
    cy.get(".ui-datepicker-month").select("May");
    cy.get(".ui-datepicker-calendar").contains("28").click();
    cy.get("#returndate").click();
    cy.get(".ui-datepicker-year").select("2024");
    cy.get(".ui-datepicker-month").select("May");
    cy.get(".ui-datepicker-calendar").contains("28").click();
    cy.get("#select2-reasondummy-container").click();
    cy.get(".select2-dropdown").contains("Expedite passport renewal").click();
    cy.get("#deliverymethod_1[type='radio'][value='1']").check({ force: true });
    cy.get("#billname").type("Abigail Abena Dadzie");
    cy.get("#billing_phone").type("0265839263");
    cy.get("#billing_email").type("abenadadzie57@gmail.com");
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-results__option").contains("Germany").click();
    cy.get("#billing_address_1").type("Hus No.3 Spitalerstrasse ");
    cy.get("#billing_address_2").type("Apartment 324");
    cy.get("#billing_postcode").type("2432,Spitalerstrasse ");
    cy.get("#billing_city").type("HafenCity District");
    cy.get("#select2-billing_state-container").click();
    cy.get(".select2-search__field").type("Hamburg").click();
    cy.get(".select2-results__option").contains("Hamburg").click();
    cy.get("#payment_method_paypal[type='radio'][value='paypal']").check({
      force: true,
    });
    cy.get("#place_order").click();
    //cy.get('iframe[name="stripe_checkout_app"]').then($iframe => {
    //const $body = $iframe.contents().find('body');
    //cy.wrap($body).find('#yith-stripe-card-number').type('1234 5612 3456 1236');

    // });
  });
});
