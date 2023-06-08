/// <reference types="cypress" />



describe('verify radio btns via webdriveruni', () =>{

    it.skip('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })

    it('check specific radio buttons', () => {
        //cypress code
    
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check() //different way to select radio btn
        
    })

    it('validate state of specific radio buttons', () => {
  
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check().should('be.checked')
  
        cy.get("[value='cabbage']").should('be.disabled')


    })

    

})
