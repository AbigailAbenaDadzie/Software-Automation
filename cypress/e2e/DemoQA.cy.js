import 'cypress-file-upload';
describe("DemoQA Form", () => {
  it.only("explicit assertion", () => {
    cy.visit("https://demoqa.com/automation-practice-form");

    cy.get("header > a > img").should("be.visible");
    cy.get("#firstName").type("Abigail");
    cy.get("#lastName").type("Dadzie");
    cy.get("#userEmail").type("abenadadzie57@gmail.com");
    cy.get("#gender-radio-2[name='gender'][value='Female']").check({
      force: true,
    });
    cy.get("#userNumber").type("0265647392");
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select("April");
    cy.get(".react-datepicker__year-select").select("2000");
    cy.get(".react-datepicker__day--015").click();
    cy.get("#subjectsInput").type("Economics{enter}");
    cy.get("#hobbies-checkbox-2[type='checkbox']").check({ force: true });
    cy.get("#uploadPicture").attachFile("photo_2023-02-28_20-59-56.jpg");
    cy.get("#currentAddress").type("Galaxy street hus no.3");
    cy.get("#state").click().type("NCR{enter}");
    cy.get("#city").click().type("Delhi{enter}");

    cy.get("button[type=submit]").click();


//Assert that the right data was typed after saving the form
    cy.get("#example-modal-sizes-title-lg").should(
      "have.text",
      "Thanks for submitting the form"
    );
    cy.get(".table-responsive").within(() => {
      cy.get("td").eq(1).should("have.text", "Abigail Dadzie");
      cy.get("td").eq(3).should("have.text", "abenadadzie57@gmail.com");
      cy.get("td").eq(5).should("have.text", "Female");
      cy.get("td").eq(7).should("have.text", "0265647392");
      cy.get("td").eq(9).should("have.text", "15 April,2000");
      cy.get("td").eq(11).should("have.text", "Economics");
      cy.get("td").eq(13).should("have.text", "Reading");
      cy.get("td").eq(15).should("have.text", "photo_2023-02-28_20-59-56.jpg");
      cy.get("td").eq(17).should("have.text", "Galaxy street hus no.3");
      cy.get("td").eq(19).should("have.text", "NCR Delhi");
    });
  });
});



