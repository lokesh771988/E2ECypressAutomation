
const myUserData = require('../fixtures/singleLogin.json')

describe("Data Drivern Wirh",()=>{
    let beforeData;
    before(()=>{
        cy.fixture('singleLogin.json').then((data)=>{
            beforeData = data;
        })
    })
    it("normal Login", ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.get('input[name="userName"]').type('mercury')
        cy.get('input[name="password"]').type('mercury')
        cy.get('input[name="submit"]').click()
        cy.get('tbody tr td h3').should('have.text', 'Login Successfully')
    })

    it('access Json', ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/index.php')

        cy.fixture('singleLogin.json').then((data)=>{
            cy.get('input[name="userName"]').type(data.userName)
            cy.get('input[name="password"]').type(data.password)
            cy.get('input[name="submit"]').click()
            cy.get('tbody tr td h3').should('have.text', data.message)
        })
    })
    it("access suite level with Login", ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.get('input[name="userName"]').type(myUserData.userName)
        cy.get('input[name="password"]').type(myUserData.password)
        cy.get('input[name="submit"]').click()
        cy.get('tbody tr td h3').should('have.text', myUserData.message)
    })
    it("access using hooks with Login", ()=>{
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.get('input[name="userName"]').type(beforeData.userName)
        cy.get('input[name="password"]').type(beforeData.password)
        cy.get('input[name="submit"]').click()
        cy.get('tbody tr td h3').should('have.text', beforeData.message)
    })
    it.only("login with multiple data", ()=>{

        cy.fixture('loginValue.json').then((data)=>{
            
            data.forEach(element => {
                cy.visit('https://demo.guru99.com/test/newtours/index.php')
                cy.get('input[name="userName"]').type(element.userName)
                cy.get('input[name="password"]').type(element.password)
                cy.get('input[name="submit"]').click()
                if(element.userName == 'mercury' && element.password == 'mercury'){
                    cy.get('tbody tr td h3').should('have.text', element.message)
                }else{
                    cy.get('tbody tr td span').contains(element.message)
                    .should('be.visible')
                }
                
            });
        })

        
        
    })
})