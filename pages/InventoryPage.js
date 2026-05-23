export class InventoryPage {

    constructor(page) {
        this.page = page;
        this.filterBtn = page.locator('[data-test="product-sort-container"]');
        this.inventoryItemPrice = page.locator('[data-test="inventory-item-price"]'); //  NOTE: same selector used in InventoryItemPage - update both if changed
        this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
    }

    async addItemToCart(itemName) {
        await this.page.locator(`[data-test="add-to-cart-sauce-labs-${itemName}"]`).click();
    }

    addToCartBtn(itemName) {
       return this.page.locator(`[data-test="add-to-cart-sauce-labs-${itemName}"]`);
    }

    async removeItemFromCart(itemName) {
        await this.page.locator(`[data-test="remove-sauce-labs-${itemName}"]`).click();
    }

    removeFromCartBtn(itemName) {
        return this.page.locator(`[data-test="remove-sauce-labs-${itemName}"]`);
    }

    async clickProductName(productName) {
        await this.page.locator('[data-test="inventory-item-name"]')
            .filter({hasText: productName})
            .click();
    }

    async filterBy(option) {
        await this.filterBtn.selectOption(option);
    }

    async getPrices() {
        return await this.inventoryItemPrice.allTextContents();
    }

    async getNames() {
        return await this.inventoryItemName.allTextContents();
}




}