class Homepage{
    setSearch(Search)
    {
        cy.get("#searchInput").type('text');
    }
  
    setLocation(Location)
    {
        cy.get("input[placeholder='Location']").type('Accra')
    }

    clickSubmit() 
    {
     cy.contains("Search").click();
    }

    clickHome()
    {
        cy.contains("Home").click();
    }

    setLogin()
    {
        cy.contains("Log in").click();
    }

    clickOnProfile()
    {
        cy.contains("Abena").click();
    }

    

    
};
export default Homepage;