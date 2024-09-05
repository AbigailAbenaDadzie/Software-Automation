    class ReportLog{
    
        clickReportLog()
       {
        cy.contains("Report Log").click();
        cy.contains("Report Log").contains('Report Log');
       } 

       clickFAQ()
       {
        cy.contains("Are the services verified?").click();
        cy.contains("Are the services verified?").contains('Are the services verified?');
       }

       toggleButton()
       {
        cy.get("button").click();
       }
    }
    export default ReportLog;