import { $ } from '@wdio/globals'

class HomePage {
    async openMenu(menu) {
        // Aqui só tratei o caso 'profile', pois esse XPath é específico
        if (menu === 'profile') {
            const menuElement = await $(`//android.widget.TextView[@text="Profile"]`)
            await menuElement.waitForExist({ timeout: 10000 })
            await menuElement.waitForDisplayed({ timeout: 10000 })
            await menuElement.click()
        } 
    }
}

export default new HomePage();

