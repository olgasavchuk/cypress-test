import {
  CART_ITEM
} from '../locators/shoppingCartElements'

class ShoppingCartPage {
  get cartItems() {
    return cy.get(CART_ITEM)
  }

  validateCartItemsNumber(number) {
    this.cartItems.should('have.length', number)
  }
}

export default new ShoppingCartPage()
