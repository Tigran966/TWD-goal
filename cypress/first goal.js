describe('test', () => {
    it('some test', () => {
        {
            cy.visit('https://dev.twdrts.com/en')
            cy.wait(1000)
            cy.get('[data-test-id=\'header-user-login\']').click()
            cy.get('[data-test-id=\'scopely-login-button\']').click()
            cy.wait(1000)
            cy.get('#input28').type("mary.bilbulyan@inomma.com")
            cy.get('#input36').type("Qwerty11111")
            cy.get(".button").click()
            cy.wait(5000)
            cy.get('[data-test-id=\'language-drop-down-selected-elem\']').click()
            cy.wait(1000)
            cy.get('[data-test-id=\'language-list-item-Русский\']').click()
            cy.wait(1000)
            cy.get('[data-test-id=\'more-player-profile-arrow-down\']').click()
            cy.wait(1000)
            cy.get('[data-test-id=\'content-1\']').click()
        }
    });
})