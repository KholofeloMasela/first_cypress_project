describe('dashboard', function(){
    beforeEach(() => {
        // Bypass the login before each test
        cy.visit('/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    });
    
      it('should navigate through main menu items', () => {
        cy.contains('Admin').click()
        cy.url().should('include', '/admin/viewSystemUsers')
        
        cy.contains('PIM').click()
        cy.url().should('include', '/pim/viewEmployeeList')
        
        cy.contains('Leave').click()
        cy.url().should('include', '/leave/viewLeaveList')
      })
})