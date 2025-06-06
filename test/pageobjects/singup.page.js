import { $ } from '@wdio/globals'

class SingupPage {
    // Busca o elemento de texto pelo nome exato
    async SingupPage(name) {
        return await $(`//android.widget.TextView[@text="${name}"]`).click()
    }
    
}

export default new SingupPage()