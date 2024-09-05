             class JobsPage{
selectJobs()
{
    cy.contains("Jobs").click();
}

clickcreateTask()
{
    cy.get(".w-full py-1.5 px-2 rounded-[5px] text-[14px] md:text-[15px] font-medium bg-primBlue text-white p-1.5").click();
}

titleJob()
{
    cy.get("#titleJob").type("Cleaning");
    cy.get("#titleJob").should('be.visible')
}

selection()
{
 cy.get(".selection").click().select("Home and Apartment Cleaning");
 cy.get(".selection").should('be.visible') 
}

description()
{
    cy.get("#description").type("Cleaning of a renovated house");
    cy.get("#description").should('visible')
}

location()
{
    cy.get("input[placeholder='Enter the location of job']").type("Takoradi");
    cy.get("input[placeholder='Enter the location of job']").should('visible')
}

budget()
{
    cy.get("#budget").type("5000");
    cy.get("budget").should('visible')
}

startdate()
{
    cy.get("#startdate").type("2024-09-08");
    cy.get("#startdate").should('visible')
}

endtime()
{
    cy.get("#endtime").type("2024-09-10");
    cy.get("#endtime").should('be.visible')
}

instructions()
{
    cy.get("#instructions").type("I need a neat cleaning");
    cy.get("#instructions").should('be.visible')
}

clickCreate()
{
    cy.get("button[type=submit]").click
}

// clickCancel()
// {
//     cy.get("body > app-root:nth-child(1) > app-job-page:nth-child(2) > app-custom-modal:nth-child(3) > p-dialog:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(1)").click()
// }




}
export default JobsPage;