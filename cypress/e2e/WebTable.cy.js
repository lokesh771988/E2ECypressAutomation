

describe("WebTable",()=>{
    it("verifing total table",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('table#productTable').scrollIntoView()
        cy.get("table#productTable tr").should('have.length', 6)
        cy.get("table#productTable tr th").should('have.length', 4)
        cy.get("table#productTable tr td").should('have.length', 20)
    })
    it("specific cell value", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('table#productTable').scrollIntoView()
        cy.get('table#productTable tr:nth-child(3) td:nth-child(2)')
        .contains('Product 3')
    })

    it("get all rows values", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('table#productTable').scrollIntoView()
        cy.get('table#productTable tbody tr')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($cel, index, $cels)=>{
                    cy.log($cel.text())
                })
            })
        })
    })

    it.only("pagination", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('table#productTable').scrollIntoView()
        /*cy.get('ul#pagination li a').then(($ele)=>{
            let pageNumbers = $ele.length
            cy.log(pageNumbers)
        })
        */

        let pageNumbers = 4;
        
        for(let p=1; p<=pageNumbers; p++){
            if(pageNumbers>1){
                
                cy.log("active page Number::; ", p)
                cy.get('ul#pagination li:nth-child('+p+') a').click()
                //cy.wait(3000)
                
                cy.get('table#productTable tbody tr')
                .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                cy.get('td').each(($cel, index, $cels)=>{
                    cy.log($cel.text())
                })
            })
        })
                
                
            }
        
        }
 
    })

})