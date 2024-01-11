///<reference types="cypress"/>

describe("handling dropdown", ()=>{
    it("normal DD", ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        //cy.get('select[name="country"]').select('ARUBA')
        //.should('have.value', 'ARUBA')
        //cy.get('select[name="country"]').select('AMERICAN SAMOA')
        //.should('have.value', 'AMERICAN SAMOA')
        cy.get('select[name="country"]').select(5)
        .should('have.value', 'ANGUILLA')
    })    
    it("normal DD", ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-reasondummy-container').click()
        cy.get('input[role="combobox"]').type('Proof of return at airport').type('{enter}')
        cy.get('#select2-reasondummy-container')
        .should('have.text', '× Proof of return at airport')
    })
    it("normal DD", ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('india')
        cy.get('em.suggestion-highlight').contains('India').click()
        cy.get('.mw-page-title-main').should('have.text', "India")
    })
    it.only("normal daymic", ()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('india')
        cy.get('.wM6W7d > span').each(($el, index, $list)=>{

            if($el.text() == "India"){
                cy.wrap($el.click())
            }
        })
    })
})