import loginPage from '../../domain/loginPageClass'
const userData = require('../../fixtures/userData.json')

describe('Login page tests', function() {
  it('User should be able to login', () => {
    cy.visit('/')
    loginPage.performLogin(userData.username, userData.password)
    cy.url().should('include', 'inventory.html')
  })
})
