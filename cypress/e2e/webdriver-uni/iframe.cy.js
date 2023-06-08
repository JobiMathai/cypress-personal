/// <reference types="cypress" />



describe('handling iframes & modals', () =>{

    it.skip('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })

    it('handling webdriveruni iframes & modals', () => {
        //cypress code
    
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#iframe').invoke('removeAttr', 'target').click({force: true})
        

        cy.get('#frame').then($iframe => { //promise
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe') //created an alias from the result of the body so we can use cypress commands
        })

        cy.get('@iframe').find('#button-find-out-more').click() //click on the find out more button to open modal
        cy.get('@iframe').find('#myModal').as('modal') //alias for the modal

        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text() //jquery method to extract the text from the modal
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods') //assertion
        })

        cy.get('@modal').contains('Close').click()
    })


})
