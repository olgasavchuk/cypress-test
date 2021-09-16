import homePage from '../../domain/homePageClass'
import shoppingCartPage from '../../domain/shoppingCartPage'

describe('Shopping cart tests', function() {
  beforeEach('Clear seesion and login', () => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.login()
  })

  it('User should be able to add an item to the cart', () => {
    const itemNumber = 1
    homePage.addFirstItemToCart()
    homePage.validateRemoveButtonIsVisible()
    homePage.validateShoppingCartBadgeValue(itemNumber)
    homePage.openShoppingCart()
    shoppingCartPage.validateCartItemsNumber(itemNumber)
  })
})
