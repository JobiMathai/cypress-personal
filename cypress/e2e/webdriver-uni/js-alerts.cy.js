/// <reference types="cypress" />



describe('handle js alerts', () =>{

    it.skip('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })

    it('confirm js alerts contains the correct text', () => {
    
        cy.visit("http://www.webdriveruniversity.com/")

        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button1').click()

        //assert that the text w/in alert box is verified
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })



    })

    it('validate js confirm alerts works correctly when clicking ok', () => {

         cy.visit("http://www.webdriveruniversity.com/")

        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return true //true = pressing ok, false = pressing cancel
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })

    it('validate js confirm alerts works correctly when clicking cancel', () => {

        cy.visit("http://www.webdriveruniversity.com/")

       //jquery method to remove attribute of target to open the page in the same window.
       cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
       cy.get('#button4').click()

       //https://docs.cypress.io/api/cypress-api/catalog-of-events#Event-Types
       cy.on('window:confirm', (str) => {
        return false //true = pressing ok, false = pressing cancel
    })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

   })


   //another type of assertion
   it('validate js confirm alerts using a stub', () => {

    cy.visit("http://www.webdriveruniversity.com/")

   //jquery method to remove attribute of target to open the page in the same window.
   cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
   
   //https://docs.cypress.io/api/commands/stub#Syntax
   const stub = cy.stub()
   cy.on('window:confirm', stub)
   cy.get('#button4').click().then(() => {
    expect(stub.getCall(0)).to.be.calledWith('Press a button!')
   }).then(() => {
    return true
   }).then(() => {
    cy.get('#confirm-alert-text').contains('You pressed OK!')

        })
    })
})
