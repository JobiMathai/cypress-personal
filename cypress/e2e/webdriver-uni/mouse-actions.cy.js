/// <reference types="cypress" />



describe('test mouse actions', () =>{

    it.skip('contact us form header is visible', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('.caption').contains('Contact Us Form')
    })

    it('scroll element into view', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
    })

    it('I should be able to drag and drop item', () => {
       cy.visit("http://www.webdriveruniversity.com/")
        //jquery method to remove attribute of target to open the page in the same window.
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

        //clicked and held the mouse down by which 1
        cy.get('#draggable').trigger('mousedown', {which: 1})
        
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true}) //chained multiple trigger command to move and unlick the mouse
    })

    it('I should be able to perform a double mouse click', () => {
        cy.visit("http://www.webdriveruniversity.com/")
         //jquery method to remove attribute of target to open the page in the same window.
         cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#double-click').dblclick()
     })

     it('I should be able to hold down the left mouse click button on a given element', () => {
        cy.visit("http://www.webdriveruniversity.com/")
         //jquery method to remove attribute of target to open the page in the same window.
         cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
     })
    

})
