describe("screenshot",()=>{
    it("demo screenshot", ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/')
        cy.screenshot()
        cy.screenshot('HomePage')
        cy.get('[name="userName"]').screenshot('UserName')
    })
})