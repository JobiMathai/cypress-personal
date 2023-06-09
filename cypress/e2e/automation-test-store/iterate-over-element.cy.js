/// <reference types="cypress" />

describe('iterate over elements', () =>{
  
    it('log info of all hair care products', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("index: " + " : " + $el.text())
         })

    })

    it('add specific product to basket', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()
            }
         })

    })


    
})
