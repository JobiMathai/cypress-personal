beforeEach(() => {
  cy.visit('https://www.google.com')
})

describe('Verify google homepage', () => {
  // it('Verifies google img is visible', () => {
  //   cy.get('.lnXdpd').should('be.visible')
  // })

 
    it('clicks on About link', () => {
     cy.get('.MV3Tnb').click({multiple: true})
     cy.origin('https://about.google', () => {
      it('contains h1 text', () => {
        cy.get('h1').should('containe.text', 'Our mission')
      })

  })

})
 

  // it('Verifies i can type in the search field', () => {
  //   cy.get('.gLFyf').type('jolie mathai {enter}')
    
  // })

})