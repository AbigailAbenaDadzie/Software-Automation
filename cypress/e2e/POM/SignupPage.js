 class SignupPage{
//first approach of using POM


setFullName(fullName )
{
    cy.get("#fullName").type(fullName);
}
  
setPhoneNumber(phoneNumber )
{
    cy.get("#phoneNumber").type(phoneNumber);
} 

setEmail(email )
{
    cy.get("#email").type(email);
}

setPassword(password )
{
    cy.wait(3000)
    cy.get("#password").type(password );
}

setConfirmPassword(confirmPassword)
{
    cy.get("#confirmPassword").type(confirmPassword);
}

clickLogin()
{
    cy.get("button[type='submit']").click();
}







}
export default SignupPage;