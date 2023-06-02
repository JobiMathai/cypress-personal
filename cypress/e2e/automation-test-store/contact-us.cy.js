/// <reference types="cypress" />



describe('test contact us on form via automation test store', () =>{


    it('should be able to submit a successful submission via contact us form', () => {
        //cypress code sample
    
        cy.visit('https://www.automationteststore.com/')
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type('Jose')
        cy.get('#ContactUsFrm_email').type('jose@yopmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('Jose was here')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 p:nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        

    })
    
 

})
