///<reference types="cypress"/>

describe("Demo First test case", () => {
    it("First Demo", ()=>{
        cy.visit("https://www.google.com")
        cy.title().should('eq', 'Google')
    })

    it.only("Second Demo", ()=>{
        cy.visit("https://www.google.com")
        cy.title().should('eq', 'Google')
    })
})