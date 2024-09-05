import SignupPage from "../POM/SignupPage";
import LoginPage from "../POM/LoginPage";
import HomePage from "../POM/Homepage";
import ServicePage from "../POM/ServicePage";
import JobsPages from "../POM/JobsPage";
import ReportLog from "../POM/ReportLog";
describe("SFNDR", () => {
  it("SignUp", () => {
    cy.visit("https://service-provider.amalitech-dev.net/");
    //cy.screenshot("Signup page");
    cy.url().should("include", "/service-provider");
    cy.title().should("contain", "SFNDR - Sevice Finder Provider");

    cy.contains("Sign up").click();
    //cy.contains("Sign up").should('contain','Sign up');

    //it.skip('Sign-up as client', () =>{
    cy.get("#clientRole").click();
    cy.get("#clientRole").should("contain", "Client");

    cy.get("button[type='button']").click();
    // cy.get("button[type='button']").should("contain", "Continue");


    //  using POM for Signin up
    const ln = new SignupPage();
    ln.setFullName("Abena_Dadzie");
    ln.setPhoneNumber("0249582847");
    ln.setEmail("cepsazakni@gufum.com");
    ln.setPassword("abeNa123?");
    ln.setConfirmPassword("abeNa123?");
    ln.clickLogin();
    // ln.verifySignup();



   
  //using POM for Log  In
    cy.contains("Sign in").click();
    cy.contains("Sign in").should('be.visible')


    const Ln = new LoginPage();
    ln.setEmail("cepsazakni@gufum.com");
    Ln.setPassword("abeNa123?");
    ln.clickLogin();


//Using POM to search for a service
const hp = new HomePage();
   hp.setSearch("Plumber");
   hp.setLocation("Accra");
   hp.clickSubmit();
   hp.clickHome();
  hp.clickOnProfile();


  //using POM to select a service
  const sp = new ServicePage();
  hp.clickOnProfile();
  sp.selectService()
  cy.wait(2000)
  sp.selectProvider();
  sp.clickRequestQuote();
  sp.details("Home Painting");  
  sp.requirements("Cleaning to be done for a renovated house");
  sp.desiredTimeframe("2024-09-05");
  sp.instructions("Need neat cleaning");
  sp.submitRequest();
 
//using POM to create jobs
const jb = new JobsPages();
hp.clickOnProfile();
jb.selectJobs();
jb.clickcreateTask();
jb.titleJob("Cleaning");
jb.selection("Home and Apartment Cleaning");
jb.description("Need neat cleaning");
jb.location("Takoradi");
jb.budget("5000");
jb.startdate("2024-09-08");
jb.endtime("2024-09-10");
jb.instructions("I need a neat cleaning");
jb.clickCreate();
// jb.clickCancel();
  });

//using POM to create report
// const re = new ReportLog();
// hp.clickOnProfile();
// re.clickReportLog()
// re.clickFAQ();
// re.toggleButton()





    // it.skip("Sign-up as provider", () => {
    //   cy.get("#providerRole").click();
    //   cy.get("#providerRole").should("contain", "Provider");

    //   cy.get("button[type='button']").click();
    //   cy.get("button[type='button']").should("contain", "Continue");

    //   cy.go("back");
    //   cy.title().should("eq", "SFNDR - Sevice Finder Provider");

    //   cy.go("forward");
    //   cy.get("#providerRole").should("contain", "Provider");
    //   cy.reload();

      // //using fixtures with POM
      // cy.fixture("SFNDR").then((data) => {
      //   const ln = new SignupPage();
      //   ln.fullName(data.fullName);
      //   ln.email(data.email);
      //   ln.password(data.password);
      //   ln.confirmPassword(data.confirmPassword);
      //   ln.clickSubmit();
      //   ln.verifySignup();
      // });
  //   });
  // });

  //  it.skip('SignIn', () =>{

  //        })
 });
