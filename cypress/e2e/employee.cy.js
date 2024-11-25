describe('emplyee', function(){
    beforeEach(() => {
        // Bypass the login before each test
        cy.visit('/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    });
    it('should display employee list', () => {
        cy.get('.oxd-table-card').should('have.length.at.least', 1)
        cy.get('.oxd-table-cell').should('be.visible')
      })
    
      it('should search for employees', () => {
        cy.get('.oxd-form').within(() => {
          cy.get('input[placeholder="Type for hints..."]').type('Cecil')
          cy.get('button[type="submit"]').click()
        })
        cy.get('.oxd-table-card').should('have.length.at.least', 1)
      })
    

    
      it('should sort employee list', () => {
        cy.get('.oxd-table-header-sort').first().click()
        cy.contains('Ascending').click()
        cy.get('.oxd-table-card').should('have.length.at.least', 1)
      })
})