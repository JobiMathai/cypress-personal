/// <reference types="cypress" />



describe('interact with dropdown lists', () =>{

    it.skip('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })


    it('select specific values via select dropdown list', () => {
  
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

        //challenge 128
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    })

    

})
