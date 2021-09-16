import {
  ADD_TO_CART_BUTTON,
  REMOVE_CART_BUTTON
} from '../locators/homePageElements'
import header from './headerClass';

class HomePage {
  get addToCartButton() {
    return cy.get(ADD_TO_CART_BUTTON)
  }

  get removeButton() {
    return cy.get(REMOVE_CART_BUTTON)
  }

  addFirstItemToCart() {
    this.addToCartButton.first().click()
  }

  openShoppingCart() {
    header.openShoppingCart()
  }

  validateRemoveButtonIsVisible() {
    this.removeButton.should('be.visible')
  }

  validateShoppingCartBadgeValue(number) {
    header.validateShoppingCartBadgeValue(number)
  }
}

export default new HomePage()
