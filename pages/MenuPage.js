export class MenuPage {

    constructor(page) {
        this.page = page;

        this.openMenuBtn = page.getByRole('button', {name:'Open Menu'});
        this.logoutSideBarLink = page.locator('[data-test="logout-sidebar-link"]');
        this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async logout() {
        await this.openMenuBtn.click();
        await this.logoutSideBarLink.click();
    }

    async clickShoppingCart() {
        await this.shoppingCartLink.click();
    }



}