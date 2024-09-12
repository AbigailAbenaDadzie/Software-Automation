    class ClientProfile{
        clickProfile()
        {
            cy.contains("Profile").click();
        }

        editName()
        {
            cy.get("#name").click().clear().type("Abena")
        }

        editNumber()
        {
            cy.get("input[placeholder='Add a phone number']").clear().type("0244582845")
        }

        saveChanges()
        {
            cy.contains("Save changes").click();
        }
    } 
    export default ClientProfile;