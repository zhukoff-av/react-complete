describe('App Load', () => {
    it('should navigate to the Image Slider page', () => {
        cy.visit('/');
        cy.contains('a', 'Go to Image Slider').click();
        cy.url().should('include', '/images');
        cy.contains('h2', 'Header').should('be.visible');
    });

    it('should navigate to the InfiniteScroll page', () => {
        cy.visit('/');
        cy.contains('a', 'Go to InfiniteScroll').click();
        cy.url().should('include', '/infiniteScroll');
        cy.contains('h2', 'Header').should('be.visible');
    });
});