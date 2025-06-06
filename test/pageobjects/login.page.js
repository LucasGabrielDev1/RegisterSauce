import { $ } from '@wdio/globals'

class LoginPage {
    get email() {
        return $('//android.widget.EditText[@resource-id="email"]')
    }

    get password() {
        return $('//android.widget.EditText[@resource-id="password"]')
    }

    get btnLogin() {
        return $('~Login')
    }

    async login(email, password) {
        const emailInput = await this.email
        await emailInput.waitForDisplayed({ timeout: 10000 })
        await emailInput.setValue(email)

        const passwordInput = await this.password
        await passwordInput.waitForDisplayed({ timeout: 10000 })
        await passwordInput.setValue(password)

        const loginButton = await this.btnLogin
        await loginButton.waitForDisplayed({ timeout: 10000 })
        await loginButton.click()
    }
}

export default new LoginPage()
