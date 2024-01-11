describe("Alerts validation", ()=>{
    it("Confirm alert", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (ele)=>{
            expect(ele).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it("Accept and Dismiss", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:alert', (ele)=>{
            expect(ele).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
        
       //cancel
       /*cy.on('window:confirm', (ele)=>{
        return false
        })
        cy.get("button[onclick='jsConfirm()']").click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
        */
    })
    it("prompt alert", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(prom){
            cy.stub(prom, "prompt").returns("testing")
        })
        cy.get("button[onclick='jsPrompt()']").click()
        
        cy.get('#result').should('have.text', 'You entered: testing')
        
    })
    it.only("basic alert", ()=>{
        /*cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        
        cy.get("div[class='example'] h3").should('have.text', "Basic Auth")
        */
        cy.visit('https://the-internet.herokuapp.com/basic_auth',
        {auth:{username:'admin',password:'admin'}})
        
        cy.get("div[class='example'] h3").should('have.text', "Basic Auth")
    })

})