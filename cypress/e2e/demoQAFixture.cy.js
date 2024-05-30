describe("Assertion demo", () => {
    it("Fixtures", () => {
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.wait(3000);
      cy.fixture("demoQA").then((data) => {

        cy.get("#firstName").type(data.firstName);
        cy.get("#lastName").type(data.lastName);
        cy.get("#userEmail").type(data.userEmail);
        if (data.genderRadio === 'Male') {
            cy.get('input[name="gender"][value="Male"]').check({ force: true });
          } else if (data.genderRadio === 'Female') {
            cy.get('input[name="gender"][value="Female"]').check({ force: true });
          } else if (data.genderRadio === 'Other') {
            cy.get('input[name="gender"][value="Other"]').check({ force: true });
          }
          
          cy.get("#userNumber").type(data.userNumber);
          cy.get('#dateOfBirthInput').click();
          cy.get('.react-datepicker__month-select').select(data.dobMonth);
          cy.get('.react-datepicker__year-select').select(data.dobYear);
          cy.get('.react-datepicker__day--0' + (data.dobDay < 10 ? '0' : '') + data.dobDay).click();
         // const dobFormatted = `${data.dobMonth}/${data.dobDay}/${data.dobYear}`;
          //cy.get('#dateOfBirthInput').should('have.value', dobFormatted);
    });
    });
});