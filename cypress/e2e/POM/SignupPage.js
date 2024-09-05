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


// verifySignup( )
// {
//     cy.get(".px-5 py-4 mt-4 text-base text-subTextColor font-medium tracking-wider bg-white hover:bg-paleCyan rounded-lg border-2 border-mainBlue border-solid max-md:px-5 max-md:max-w-full").click();
//     //  should('be.visible');

// }




}
export default SignupPage;