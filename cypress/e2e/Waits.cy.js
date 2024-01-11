require('cypress-wait-until')

describe("waits demo", ()=>{
    it("waits", ()=>{
        //https://play.google.com/log?format=json&hasfast=true&authuser=0
        cy.intercept('POST','https://play.google.com/log?format=json&hasfast=true&authuser=0')
        .as('myRequest')
        cy.visit('https://www.google.com/')
        //cy.wait(5000)
        cy.wait('@myRequest')
        cy.get('#APjFqb',{timeout: 5000}).type('lokesh')
    })
    it.only('waituntils', ()=>{
        cy.visit('https://www.programsbuzz.com/')
        cy.waitUntil(()=>
            cy.get('.nav-link.is-active')
            .invoke('text')
            .then(texts => texts === 'Home'), {
                errorMsg: 'This is a custom error message', // overrides the default error message
                timeout: 2000, // waits up to 2000 ms, default to 5000
                interval: 500 // performs the check every 500 ms, default to 200
              }
        )
    })
})