/// <reference types="cypress" />



describe('validate webdriveruni homepage links', () =>{

    it.skip('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })

    it('confirm links redirect to the correct page', () => {
        //cypress code
    
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window instead of a new tab.
        
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        // reload w/o cache = cy.reload(true)
       
        cy.go('forward')
        cy.url().should('include', 'contactus')

        //goto login portal & back
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')


        //Challenge 109: go to "to-do-list" and back to homepage
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')

    })
    

})
