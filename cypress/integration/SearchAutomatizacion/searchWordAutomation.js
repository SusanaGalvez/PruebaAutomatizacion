require('Cypress-xpath')
Cypress.on('uncaughtException', (err,runnable)=>{
  return false;//con esta función se asegura que la página no da error
})
describe('Ejercicio de Automatización', () => {
  it('Realiza la búsqueda en Google y verifica la fecha en Wikipedia', () => {
    // Abre Google
    cy.visit('https://www.google.es')
    cy.wait(5)

    // Cojo el Id de la alerta para aceptar todo.
    cy.get('#L2AGLb > .QS5gu').click()
    cy.wait(5)


    // Busco la palabra "automatización" en Google.
    cy.get('#APjFqb').type('automatización{enter}')
    cy.wait(1)


    // Consigo el children 
    cy.get(':nth-child(4) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    cy.wait(1)
   
    // Cogemos el Id de historia
    cy.xpath("//div[@class='vector-toc-text'][contains(.,'3Historia')]").click({force:true})
    // cy.get(".vector-toc-numb").click({ force: true })
    cy.wait(3)
   
    // Obtiene el año del primer proceso automático.
    cy.contains('En 1771 Richard Arkwright inventó la primera hilandería totalmente automatizada ').should('exist');
  
    // Realiza una captura de pantalla de la página.
    cy.screenshot('wikipedia_automatizacion')
        
      })
    
     })
     

