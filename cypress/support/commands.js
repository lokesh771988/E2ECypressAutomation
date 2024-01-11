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

//const { filter } = require("cypress/types/bluebird");

//const { filter } = require("cypress/types/bluebird");

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://demo.guru99.com/test/newtours/')
    cy.get('[name="userName"]').type(email)
    cy.get('[name="password"]').type(password, { sensitive: true })
    cy.get('[name="submit"]').click()
 })
Cypress.Commands.add('clickLink', (locator)=>{
    cy.get('a').contains(locator).click()
})

Cypress.Commands.overwriteQuery('contains', function(originalFn, filter, text, 
    options ={}){
    if(Cypress._.isRegExp(text)){
        //nothing
    }else if(Cypress._.isObject(text)){
        options = text
        text = filter
        filter = ''
    }else if(Cypress._.isUndefined(text)){
        text = filter
        filter = ''
    }
    options.matchCase = false
    let orinal = originalFn.bind(this)
    return orinal(filter, text, options)
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })
Cypress.Commands.add('parseXlsx', (filePath)=>{
    return cy.task('parseXlsx', {filePath: filePath})
})

Cypress.Commands.add('getIframe', (iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

