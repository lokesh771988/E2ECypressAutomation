require('@4tw/cypress-drag-drop')
require('cypress-wait-until')

describe("Mouse Actions", ()=>{
    it("mouse over", ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('div#narbar-menu>ul>li:nth-child(1) > a')
        .trigger('mouseover').click()
        
        cy.get("div#narbar-menu>ul>li:nth-child(1) > div div> ul>li:nth-child(1)>a",
        {timeout: 10000})
        .should('be.visible')
        
        
    })
    it("double click", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[ondblclick='myFunction1()']").trigger('dblclick')
        cy.get('#field2').should('have.value', "Hello World!")
        //cy.get("button[ondblclick='myFunction1()']").dblclick()
        //cy.get("#field2").should('have.value', "Hello World!")
    })
    it("right click", ()=>{
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        //cy.get('body#authentication > span').trigger('contextmenu')
        cy.get('body#authentication > span').rightclick()
        cy.get("body#authentication > ul > li:nth-child(1) >span")
        .should('be.visible')
    })
    it("drag and drop", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#draggable').drag("#droppable", {force: true})
        cy.get("div#droppable > p").should('have.text', "Dropped!")
    })
    it("scroll", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        //cy.get("button[ondblclick='myFunction1()']").scrollIntoView().should('be.visible')
        cy.scrollTo('center')
    })
    it.only('WaitUntil',()=>{
        cy.visit('https://www.programsbuzz.com/')
       cy.waitUntil(()=>
        cy.get('#block-programsbuzz-main-navigation > .navbar-nav > :nth-child(1) > .nav-link')
       .invoke('text')
       .then(textt => 
       textt === "Home1" ), {
        errorMsg: 'This is a custom error message', // overrides the default error message
        timeout: 2000, // waits up to 2000 ms, default to 5000
        interval: 500 // performs the check every 500 ms, default to 200
      }
       
      )
    })
})