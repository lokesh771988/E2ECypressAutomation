describe("Radio and Checkbox", ()=>{
    it("Radi button", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#male').should('be.visible')
        .and('not.be.checked')
        .check()
        .and('be.checked')
        cy.get('#female').should('exist')
        .and('not.be.checked')
        .check()
        .and('be.checked')
    })

    it.only("Checkbox", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        /*cy.get('#sunday').should('be.visible')
        .and('not.be.checked')
        .check()
        .and('be.checked')
        */
       //cy.get('input.form-check-input[type="checkbox"]').first().check().and('be.checked')
       //cy.get('input.form-check-input[type="checkbox"]').last().check().and('be.checked')

       cy.get('input.form-check-input[type="checkbox"]').check(['monday','tuesday']).and('be.checked')
    })
})