const { addCommands } = require('cypress-commands');
//cypress/support/index.js
require('cypress-xpath');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import 'cypress-file-upload';


 ///<reference types="cypress"/>  //for cypress
 ///<reference types="cypress-xpath"/> //for xpath


 // Add a custom command for handling iframes
 Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
   return new Cypress.Promise((resolve) => {
     $iframe.on('load', () => {
       resolve($iframe.contents().find('body'));
     });
   });
 });
 



