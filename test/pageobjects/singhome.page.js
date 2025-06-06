import { $ } from '@wdio/globals'

class HomeSing {
    async openMenu(Sing) {
        // Aqui só tratei o caso 'profile', pois esse XPath é específico
        if (Sing === 'Sing-Up') {
            const menuElement = await $(`//android.widget.TextView[@text="Sign up"]`)
            await menuElement.waitForExist({ timeout: 10000 })
            await menuElement.waitForDisplayed({ timeout: 10000 })
            await menuElement.click()
        } 
    }
}

export default new HomeSing()

