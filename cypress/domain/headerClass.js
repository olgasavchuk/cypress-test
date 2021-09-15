import { 
    SHOPPING_CART_BADGE,
    SHOPPING_CART_BUTTON
} from '../locators/headerElements'

class Header {

    get shoppingCartBadge() {
        return cy.get(SHOPPING_CART_BADGE)
    }

    get shoppingCartButton() {
        return cy.get(SHOPPING_CART_BUTTON)
    }

    openShoppingCart() {
        this.shoppingCartButton.click()
    }

    validateShoppingCartBadgeValue(number) {
        this.shoppingCartBadge.should('have.text', number)
        return this
    }
}

export default new Header()