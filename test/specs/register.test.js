import { faker } from '@faker-js/faker';
import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import singhomePage from '../pageobjects/singhome.page.js'
import registerPage from '../pageobjects/register.page.js'
import wishlistPage from '../pageobjects/wishlist.page.js'

describe('Meu Registro Aplicativo', () => {

    it('validar credenciais de registro', async () => {

        await homePage.openMenu('profile') // Entre Profile
        
        await singhomePage.openMenu('Sing-Up') // Aperte em Sing up
        
        await registerPage.register(faker.person.firstName(), faker.person.lastName(), faker.phone.number(), faker.internet.email(), 'teste12@Lucas', 'teste12@Lucas')
        //Deve colocar as informcoes de registro com sucesso e deve clicar no coracao apos o registro

        await wishlistPage.openWishlist();
        const message = await wishlistPage.getMessageText();
        expect(message).toBe('Wishlist'); // valida que a mensagem é "Wishlist"


        


        // Aguarda o elemento do perfil aparecer antes de validar
        /* const profileNameElement = await profilePage.profileName('EBAC Cliente')        //Aguardando para poder usar para validar algume mensagem de Registro
        await profileNameElement.waitForDisplayed({ timeout: 10000 }) // 10s já é razoável

         expect(await profileNameElement.isDisplayed()).toBeTruthy()*/
    })
})