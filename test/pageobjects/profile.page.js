import { $ } from '@wdio/globals'

class ProfilePage {
    // Busca o elemento de texto pelo nome exato
    async profileName(name) {
        return await $(`//android.widget.TextView[@text="${name}"]`)
    }
}

export default new ProfilePage()
