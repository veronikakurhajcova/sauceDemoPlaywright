export class CheckoutOverview {

        constructor(page) {
            this.page = page;

            this.inventoryItemsDescription = page.locator('[data-test="inventory-item"]');
            this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
            this.inventoryItemPrice = page.locator('[data-test="inventory-item-price"]');
            this.paymentInfoValue = page.locator('[data-test="payment-info-value"]');
            this.shippingInfoValue = page.locator('[data-test="shipping-info-value"]');
            this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
            this.totalPriceLabel = page.locator('[data-test="total-label"]');
            this.finishBtn = page.locator('[data-test="finish"]');
        }

        async proceedToFinish() {
            await this.finishBtn.click();
        }
  



}