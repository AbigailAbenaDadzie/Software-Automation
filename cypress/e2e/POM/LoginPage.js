  class LoginPage{
    
    setEmail(email )
{
    cy.get("#email").type(email);
}
    setPassword(Password)
    {
     cy.get("input[placeholder='Password']").type(Password);
    }

    clickLogin()
    {
      cy.get("button[type='submit']").click(); 
    }
  }
  export default LoginPage;