/// <reference types="cypress" />



describe('verify auto complete dropdown lists via webdriver uni', () =>{

    it.skip('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })


    it('select specific product via autocomplete list', () => {
  
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true})

        //type in the field
        cy.get('#myInput').type('A')

        //select a value from the dropdown presented (each) -- iterate
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

            //get all the products & store in the variable product
            const product = $el.text()
            const productToSelect = 'Avacado'

            if(product === productToSelect){
                //deprecated $el.click()
                $el.trigger("click") //new jquery method

                cy.get('#submit-button').click()

                cy.url().should('include', productToSelect)
            }

            //after the previous test runs, then it runs a second time with a different letter
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

            //get all the products & store in the variable product
                const product = $el.text()
                const productToSelect = 'Grapes'

                if(product === productToSelect){
                //deprecated $el.click()
                $el.trigger("click") //new jquery method

                cy.get('#submit-button').click()

                cy.url().should('include', productToSelect)
            }
        })

//do another test with a different letter
    })

})

})
