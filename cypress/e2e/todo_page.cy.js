describe('pruebas de la pagina TODO', () => {
  it('anadir tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })
  
  it('marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
  })

  it('desmarcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').uncheck()
  })
  
  it('editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]').type('{selectAll}').type('{del}')
    cy.get('.view > .input-container > [data-testid="text-input"]').type('fregar el suelo{enter}')
  })

   it('borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.contains('comprar el pan').parent().trigger('mouseover')
    cy.contains('comprar el pan').parent().find('.destroy').click({ force: true })
    
  })

   it('filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="text-input"]').type("fregar el suelo{enter}")
    cy.get('[data-testid="text-input"]').type("pasear al gato{enter}")
    cy.get('[data-testid="text-input"]').type("ir a correos{enter}")
    cy.get('[data-testid="text-input"]').type("recoger aceitunas{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]') .click()
    cy.get(':nth-child(5) > .view > [data-testid="todo-item-toggle"]') .click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').click()

  })
})

      
  

  
