///<reference types="cypress"/>
require('cypress-xpath')
require('cypress-iframe');

describe("demo iframes", ()=>{
    it("normal iframe", ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        //cy.getIframe('#mce_0_ifr').clear().type("lokesh").should('have.text', 'lokesh')
        let iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        iframe.clear().type("lokesh").should('have.text', 'lokesh')
        
        //cy.xpath('//*[@id="content"]/div/div/div[1]/div[1]/div[2]/div/div[3]/button[1]/span/svg/path')
        //.click()

    })
    it("extenal", ()=>{
        cy.visit('https://jqueryui.com/droppable/')
        cy.frameLoaded('.demo-frame')
        cy.iframe().find('#draggable').then(function(value){
            let text = value.text()
            expect(text).to.contains("Drag me to my target")
        })
    })
})