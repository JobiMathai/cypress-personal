/// <reference types="cypress" />

describe('alias and invoke', () =>{
  
    it('validate a specific haircare product', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

        //challenge video 96
        it('validate the product thumbnail', () => {
            cy.visit('https://www.automationteststore.com/')
            cy.get('.thumbnail').as('productThumbnail')
            cy.get('@productThumbnail').should('have.length', 16)
            cy.get('@productThumbnail')
            .find('.productcart')
            .invoke('attr', 'title')
            .should('include', 'Add to Cart')
            })
        
         it.only('calculate total of normal & sale products', () => {
            cy.visit('https://www.automationteststore.com/')
            cy.get('.thumbnail').as('productThumbnail')
            // cy.get ('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            //  cy.log($el.text())
            
            //alias for non-sales item
            cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')

            //alias for sales item
            cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')


            var itemsTotal = 0
            cy.get('@itemPrice').then($linkText => {
                var itemPriceTotal = 0
                var itemPrice = $linkText.split('$')
                var i
                for(i = 0; i < itemPrice.length; i++) {
                    cy.log(itemPrice[i])
                    itemPriceTotal += Number(itemPrice[i])
                }
                itemsTotal += itemPriceTotal
                cy.log("non sales price items total: " + itemPriceTotal)
            })

            cy.get('@saleItemPrice').then($linkText => {
                var saleItemsPrice = 0
                var saleItemPrice = $linkText.split('$')
                var i
                for(i = 0; i < saleItemPrice.length; i++) {
                    cy.log(saleItemPrice[i])
                    saleItemsPrice += Number(saleItemPrice[i])
                    
                }
                itemsTotal += saleItemsPrice
                cy.log("sales price items total: " + saleItemsPrice)
                

            })
            //assert that total price is valid
            .then(() => {
                cy.log('total prices of all products: ' + itemsTotal)
                expect(itemsTotal).to.equal(656.5)
            })

         })
                
     })    


