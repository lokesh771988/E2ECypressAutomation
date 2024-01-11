describe("CSS Selector", ()=>{
    it("id demo", ()=>{
        cy.visit("https://www.google.com")
        //cy.get('#APjFqb').type('lokesh')
        //cy.get('.gLFyf').type('lokesh')
        cy.get('[jsname="yZiJbe"]').type('lokesh')
    })
    it.only("subsctring value", ()=>{
        cy.visit("https://demo.guru99.com/test/newtours/")
        //cy.get('input[name^="user"]').type('lokesh')
        //cy.get('input[name$="Name"]').type('lokesh')
        cy.get('input[name*="erNa"]').type('lokesh')
    })
})