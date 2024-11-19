describe('User managment', function(){
    beforeEach(() => {
        // Bypass the login before each test
        cy.bypassLogin(username, password);
    });


    it('Admin', () =>{
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    
    })

  
})