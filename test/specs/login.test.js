import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'  // mantido camelCase

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile') // aperte em profile
 
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ') // coloque essas informacoes no login e aperte em login

        await homePage.openMenu('profile') // abra o perfil novamente 

        // Aguarda o elemento do perfil aparecer antes de validar
        const profileNameElement = await profilePage.profileName('EBAC Cliente') // Valide essa mensagem apos entrar
        await profileNameElement.waitForDisplayed({ timeout: 10000 }) // 10s já é razoável

        expect(await profileNameElement.isDisplayed()).toBeTruthy()
    })
})
 // FIM DO CODIGO