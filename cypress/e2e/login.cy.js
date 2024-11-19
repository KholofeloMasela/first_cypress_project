describe('Login', function(){
    it('visit site', () => {
        cy.visit('/login')
        cy.get('.orangehrm-login-branding > img')
        cy.get('.orangehrm-login-slot')

    })

    it('login', () =>{
        cy.visit('/login')
        // Unsuccesfull login
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('1254haf')
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
        

        // succesfull login
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')

    })

  
})