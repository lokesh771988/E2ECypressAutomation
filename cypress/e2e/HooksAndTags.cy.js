describe("hooks and tags", ()=>{

    before(()=>{
        cy.log("browser is opened")
    })

    after(()=>{
        cy.log("closing browser")
    })

    beforeEach(()=>{
        cy.log("opening excel file data")
    })

    afterEach(()=>{
        cy.log("closing opened excel file")
    })
    it("TC1", ()=>{
        cy.log("verify Home page")
    })

    it.skip("TC2", ()=>{
        cy.log("adding new user")
    })

    it("TC3", ()=>{
        cy.log("search producte")
    })
})