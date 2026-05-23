export class InventoryItemPage {

    constructor(page) {
        this.page = page;
        this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
        this.inventoryItemPrice = page.locator('[data-test="inventory-item-price"]');
        this.inventoryAddToCartBtn = page.locator('[data-test="add-to-cart"]');
    }

    productName(itemName) {
        return this.inventoryItemName.filter({hasText:itemName});
    }

    productPrice(itemPrice) {
        return this.inventoryItemPrice.filter({hasText:itemPrice});
    }
}