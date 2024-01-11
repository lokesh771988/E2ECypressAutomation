describe("Custom Commands", ()=>{
    it('normal function', ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/')
        cy.get('a').contains('REGISTER').click()
        cy.title().should('eq', 'Register: Mercury Tours')
    })
    it('add custom command', ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/')
        //cy.clickLink('REGISTER')
        cy.clickLink('register')
        cy.title().should('eq', 'Register: Mercury Tours')
    })
    it.only("overWrite", ()=>{
        /*cy.visit('https://demo.guru99.com/test/newtours/')
        cy.get('[name="userName"]').type('mercury')
        cy.get('[name="password"]').type('mercury', { sensitive: true })
        cy.get('[name="submit"]').click()
        */
        cy.login('mercury', 'mercury')
        cy.title().should('eq', 'Login: Mercury Tours')
        
    })
})