class SignUp  //first approach of using POM
{

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
    cy.get("#password").type(password );
}

setConfirmPassword(confirmPassword)
{
    cy.get("#confirmPassword").type(confirmPassword);
}

clickSubmit()
{
    cy.get("button[type='submit']").click();
}

verifySignup( )
{
    cy.get("h1[class='text-4xl tracking-tighter max-md:max-w-full']").should('contain','Verify Your Email');
}




}
export default SignupPage;