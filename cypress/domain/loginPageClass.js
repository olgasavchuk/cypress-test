import { 
    USERNAME_FIELD, 
    PASSWORD_FIELD, 
    LOGIN_BUTTON 
} from '../locators/loginPageElements'

class LoginPage {
    get usernameField() {
        return cy.get(USERNAME_FIELD)
    }

    get passwordField() {
        return cy.get(PASSWORD_FIELD)
    }

    get loginButton() {
        return cy.get(LOGIN_BUTTON)
    }

    performLogin(username, password) {
        this.usernameField.clear().type(username)
        this.passwordField.clear().type(password)
        this.loginButton.click()
    }
}

export default new LoginPage()