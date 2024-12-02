describe('User managment', function(){
    beforeEach(() => {
        // Bypass the login before each test
        cy.visit('/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    });


    it('should display system users', () => {
        cy.url().should('include', '/admin/viewSystemUsers')
        cy.get('.oxd-table-card').should('have.length.at.least', 1)
      })
    
    it('should search system users', () => {
        cy.get('.oxd-form').within(() => {
            cy.get('input[placeholder="Type for hints..."]').first().type('Admin')
            cy.get('button[type="submit"]').click()
        })
        cy.get('.oxd-table-card').should('have.length.at.least', 1)
    })
    
    it('should filter user roles', () => {
        cy.get('.oxd-form').within(() => {
        cy.get('.oxd-select-text').eq(0).click()
        })
        cy.contains('Admin').click()
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-table-card').should('have.length.at.least', 1)
    })
    
    it('should navigate to job titles', () => {
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        cy.url().should('include', '/admin/viewJobTitleList')
        cy.get('.oxd-table-card').should('have.length.at.least', 1)
    })

  
})

