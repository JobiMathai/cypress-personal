/// <reference types="cypress" />



describe('test contact us on form via webdriver uni', () =>{

    it('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })

    it('should be able to submit a successful submission via contact us form', () => {
        //cypress code
    
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.get('[name="first_name"]').type('Jose')
        cy.get('[name="last_name"]').type('Jalapeno')
        cy.get('[name="email"]').type('jose.jalapeno@gmail.com')
        cy.get('textarea.feedback-input').type('Jose was here')
        cy.get('[type="submit"]').click()
        cy.xpath("//div[@id='contact_reply']/h1[.='Thank You for your Message!']").should('have.text', 'Thank You for your Message!')
        //cy.get('#contact_reply').should('have.text', 'Thank You for your Message!')

    })
    
    it('should not be able to submit a successful submission via contact us form as all fields are requires', () => {
        //cypress code
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.get('[name="first_name"]').type('Jose')
        cy.get('[name="last_name"]').type('Jalapeno')
        //cy.get('[name="email"]').type('jose.jalapeno@gmail.com')
        cy.get('textarea.feedback-input').type('Jose was here')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')

    })

})
