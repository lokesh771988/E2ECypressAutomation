describe("textbox demo", ()=>{
    it("demo textbox validation", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        //cy.get('#name').should('be.visible').type("lokesh")
        //.should('have.value', 'lokesh')
        //enter value in textbox
        /*cy.get('#name').type("lokesh")
        .type("{insert} gorantla")
        .should('have.value', 'lokesh gorantla')
        .and('be.visible')
        */
        /*cy.get('#name').should('be.visible').type("lokesh")
        .type("{insert} gorantla")
        .should('have.value', 'lokesh gorantla')
        */
        /*cy.get('#name').should('exist').type("lokesh")
        .type("{insert} gorantla")
        .should('have.value', 'lokesh gorantla')
        */
       // home 
       /*cy.get('#name').should('be.visible').type("lokesh")
        .type("{home}gorantla ")
        .should('have.value', 'gorantla lokesh')
        */
       //End
       cy.get('#name').should('be.visible').type("lokesh")
        .type("{end} Testing")
        .and('have.value', 'lokesh Testing')
    })
})