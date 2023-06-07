/// <reference types="cypress" />



describe('cypress web security', () =>{

    it.skip('validate visiting two different domains', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')

    })
    
    it('validate visiting two different domains via user actions', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })

    it('Origin command', ()=> {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit('/')
        })

        cy.origin('automationteststore.com', () => {
            cy.visit('/')
        })
    })

})
