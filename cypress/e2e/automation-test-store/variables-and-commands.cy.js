/// <reference types="cypress" />

describe('Verify variables, cypress commands and jquery commands', () =>{
    it('navigating to specific product pages', () => {
        cy.visit('https://www.automationteststore.com/')
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")

        // makeupLink.click()
        // skincareLink.click()

        //recommended approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
    })

    it('navigating to specific product pages', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //bad approach
        // const header = cy.get("h1 .maintext")
        // cy.log(header.text())

        //good approach using promise
        cy.get("h1 .maintext").then(($headerText) => {
           
            //create the variable
            const headerText = $headerText.text()
            cy.log("found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
        
    })
    it.only('validate properties of the contact us page', () => {
        cy.visit('https://www.automationteststore.com/index.php?rt=content/contact')

        //uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')


        //jquery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //embedded commans(Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
        

        
        
        
        
    })

})
