/// <reference types="cypress" />



describe('verify checkboxes via webdriveruni', () =>{

    it.skip('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })

    it('check and validate checkboxes', () => {
        //cypress code
    
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        
        //code is not DRY
        //cy.get('#checkboxes > :nth-child(1) > input').check() //input for selecting the checkbox
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked') //asserting that the checkbox is checked
                
        //DRY concept (do not repeat yourself)
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1') //create an alias
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
        
    })

    //challenge 121
    it('uncheck and validate checkboxes', () => {
        //cypress code
    
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#dropdown-checkboxes-radiobuttons')
        .invoke('removeAttr', 'target')
        .click({force: true})
  
        cy.get('#checkboxes > :nth-child(5) > input').as('option-5') //create an alias
        cy.get('@option-5')
        .uncheck()
        .should('not.be.checked') //uncheck the checkbox, and validate its not checked.
        
    })

    it('check multiple checkboxes', () => {
        //cypress code
    
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#dropdown-checkboxes-radiobuttons')
        .invoke('removeAttr', 'target')
        .click({force: true})
        
        //get the type of the field to select all checkboxes
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')

    })

})
