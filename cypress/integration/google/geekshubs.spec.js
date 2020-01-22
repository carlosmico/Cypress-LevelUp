
context('Nombre Del Objetivo', () => {

    // Con 'it' creamos nuestra 1º Prueba
    it('Nombre De La Prueba 1', () => {

        cy.visit('https://www.google.com/');

    });

    // Volvemos a Crear Otra Prueba Diferente
    it('Nombre De La Prueba 2', () => {

        cy.visit('https://www.google.com/');

        cy.get('.gLFyf').type('GeekHubs');

        cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').click();

        cy.get('[href="https://geekshubs.com/"] > .LC20lb').click();

    });

});