/// <reference types="cypress" />

describe('Selectable Grid Test', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/selectable');
    });

    it('should highlight "Two", "Four", "Six", "Eight" and not highlight others', () => {
        cy.contains('Grid').click();
        cy.contains('Two').click();
        cy.contains('Four').click();
        cy.contains('Six').click();
        cy.contains('Eight').click();

        cy.contains('Two').invoke('attr', 'class').then(classList => {
            console.log('Classes for Two:', classList);
        });
        cy.contains('Four').invoke('attr', 'class').then(classList => {
            console.log('Classes for Four:', classList);
        });
        cy.contains('Six').invoke('attr', 'class').then(classList => {
            console.log('Classes for Six:', classList);
        });
        cy.contains('Eight').invoke('attr', 'class').then(classList => {
            console.log('Classes for Eight:', classList);
        });

        cy.contains('Two', { timeout: 20000 }).should('have.class', 'list-group-item active');
        cy.contains('Four', { timeout: 20000 }).should('have.class', 'list-group-item active');
        cy.contains('Six', { timeout: 20000 }).should('have.class', 'list-group-item active');
        cy.contains('Eight', { timeout: 20000 }).should('have.class', 'list-group-item active');

        cy.contains('One', { timeout: 20000 }).should('not.have.class', 'list-group-item active');
        cy.contains('Three', { timeout: 20000 }).should('not.have.class', 'list-group-item active');
        cy.contains('Five', { timeout: 20000 }).should('not.have.class', 'list-group-item active');
        cy.contains('Seven', { timeout: 20000 }).should('not.have.class', 'list-group-item active');
        cy.contains('Nine', { timeout: 20000 }).should('not.have.class', 'list-group-item active');
    });
});
