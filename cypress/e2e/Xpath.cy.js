///<reference types="cypress"/>
describe("Xpath Demo", ()=>{
    it("demo xpath", ()=>{
        cy.visit("https://www.google.com")
        cy.xpath('//*[@id="APjFqb"]').type("lokesh")
    })
})