import { $ } from '@wdio/globals'

class WishlistPage {
    get wishlistButton() {
        return $('//android.widget.TextView[@resource-id="wishlist"]')
    }

    // Elemento da mensagem com texto "Wishlist"
    get wishlistMessage() {
        return $('//android.widget.TextView[@text="Wishlist"]')
    }

    async openWishlist() {
        const button = await this.wishlistButton;
        await button.waitForDisplayed({ timeout: 10000 });
        await button.click();
    }

    async getMessageText() {
        const messageElem = await this.wishlistMessage;
        await messageElem.waitForDisplayed({ timeout: 10000 });
        return await messageElem.getText();
    }
}

export default new WishlistPage();
