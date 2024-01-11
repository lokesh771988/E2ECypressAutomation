describe("Windows handling",()=>{
    it("target Remove", ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click()
        cy.url().should('include', '/windows/new')
        cy.get("div[class='example'] h3").should('have.text', "New Window")
        cy.go('back')
        cy.url().should('include', '/windows')
    })

    it.only("naviaget child", ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").then((ele)=>{
            let url = ele.prop('href')
            cy.visit(url)
        })
        cy.url().should('include', '/windows/new')
        cy.get("div[class='example'] h3").should('have.text', "New Window")
        cy.go('back')
        cy.url().should('include', '/windows')
    })
})