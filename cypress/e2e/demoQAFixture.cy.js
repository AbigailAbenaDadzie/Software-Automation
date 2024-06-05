import "cypress-file-upload";
describe("Assertion demo", () => {
  it("Fixtures", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.wait(3000);
    cy.fixture("demoQA").then((data) => {
      cy.log(data.firstName);
      cy.get("#firstName").type(data.firstName);
      cy.get("#lastName").type(data.lastName);
      cy.get("#userEmail").type(data.userEmail);
      if (data.genderRadio === "Male") {
        cy.get('input[name="gender"][value="Male"]').check({ force: true });
      } else if (data.genderRadio === "Female") {
        cy.get('input[name="gender"][value="Female"]').check({ force: true });
      } else if (data.genderRadio === "Other") {
        cy.get('input[name="gender"][value="Other"]').check({ force: true });
      }

      cy.get("#userNumber").type(data.userNumber);
      cy.get("#dateOfBirthInput").click();
      cy.get(".react-datepicker__month-select").select(data.dobMonth);
      cy.get(".react-datepicker__year-select").select(data.dobYear);
      cy.get( ".react-datepicker__day--0" +(data.dobDay < 10 ? "0" : "") +data.dobDay).click();
      cy.get("#subjectsInput").click().type(data.subjectsInput);
      cy.get(".subjects-auto-complete__menu-list")
        .contains(data.subjectsInput)
        .click();
      cy.get("#hobbies-checkbox-2").check({ force: true });
      cy.get("#uploadPicture").attachFile(data.uploadPicture);
      cy.get("#currentAddress").type(data.currentAddress);
      cy.get('#state .css-1wa3eu0-placeholder').click().type(`${data.state}{enter}`);
      cy.get('#city .css-1wa3eu0-placeholder').click().type(`${data.city}{enter}`);
      cy.get('#submit').click();
    });
  });
});
