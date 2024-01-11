describe("Assert Demo", ()=>{
    it("implicit assert demo", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        //cy.url().should('include', '.blogspot.com/')
        //cy.url().should('eq', 'https://testautomationpractice.blogspot.com/')
        //cy.url().should('contain', '.blogspot.com/')
        //cy.url().should('include', '.blogspot.com/')
        //.should('eq', 'https://testautomationpractice.blogspot.com/')
        //.should('contain', '.blogspot.com/')
        cy.url().should('include', '.blogspot.com/')
        .and('eq', 'https://testautomationpractice.blogspot.com/')
        .and('contain', '.blogspot.com/')
        .and('not.contain', 'lokesh')

        //cy.get('#name').type('lokesh').should('have.value', 'lokesh')
        //visible
        //cy.get('#name').should('be.visible')
        //cy.get('#name').should('exist')
        //cy.get('#name').should('be.visible').and('exist')
        //cy.get('#name').and('exist')
        //cy.get('input.form-check-input[type="checkbox"]').should('have.length', 7)
    })
    it.only("explicit assert demo", ()=>{
        //assert.equal(true, true, "expected both are same")
        //assert.notEqual(true, false, "expected both are not same")

        //expect(true).to.eq(true)
        //expect(true).not.to.eq(false)
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('[for="sunday"]').then((element)=>{
            let value = element.text()
            expect("Sunday").to.eq(value)
            assert.equal("Sunday", value)

        })
        
    })
})