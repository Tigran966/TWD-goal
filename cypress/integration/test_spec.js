describe('test', () => {
    it('some test', () => {
        {
            cy.visit('https://dev.twdrts.com/en')
            cy.wait(3000)
            cy.get('.jss2 > .sc-ftvSup').click()
            cy.wait(1000)
            cy.get('[data-test-id=\'left-sidebar-navicon-shopping-bag-open-fill\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'language-drop-down-selected-elem\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'language-list-item-한국어\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'left-sidebar-navicon-calendar-todo-fill\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'left-sidebar-navicon-scull\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'left-sidebar-navicon-account\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'left-sidebar-navicon-frame\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'left-sidebar-navicon-note-fill\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'left-sidebar-navicon-calendar-fill-2\']').click()
            cy.wait(3000)
            cy.get('[data-test-id=\'left-sidebar-navicon-squares-four-fill\']').click()
            cy.wait(2000)
            cy.get('[data-test-id=\'header-user-login\']').click()
            cy.wait(2000)
            cy.get('.sc-ftvSup.ediCXY.scopely-btn.medium.text-uppercase.header-buttons.cursor-pointer').click()
            cy.wait(2000)
            cy.get('#input28').type("mary.bilbulyan@inomma.com")
            cy.get('#input36').type("Qwerty11111")
            cy.get(".button").click()
            cy.wait(10000)
            cy.get('[data-test-id=\'more-player-profile-info-vector\']').click()
            cy.wait(1000)
            cy.get('[data-test-id=\'content-1\']').click()





        }
    });
})