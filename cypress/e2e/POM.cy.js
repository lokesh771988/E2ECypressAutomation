import loginPage from "../PageObject/login"

describe("demo POM", ()=>{
    it("Without POM", ()=>{
        cy.visit("https://demo.guru99.com/test/newtours/")
        cy.get('[name="userName"]').type("mercury")
        cy.get('[name="password"]').type("mercury")
        cy.get('[name="submit"]').click()
    })
    it("With POM", ()=>{
        const ln = new loginPage()
        ln.visit()
        ln.typeUserName("mercury")
        ln.typePassword("mercury")
        ln.clickSubmit()
    })
    it.only("With single method POM", ()=>{
        const ln = new loginPage()
        ln.loginMethod("mercury", "mercury")
    })
})