import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { MenuPage } from '../pages/MenuPage';
import { USERS, PRODUCTS } from '../helpers/credentials';

test.describe('Cart Suite', () => {

    let loginPage;
    let inventoryPage;
    let menuPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        menuPage = new MenuPage(page);

        await loginPage.navigate();
        await loginPage.login(USERS.standard.username, USERS.standard.password);
    })

    test('[HP] - Add one product to Cart - should update cart badge and change button to Remove', { tag: ['@regression', '@smoke'] }, async ({ page }) => {
        await expect(inventoryPage.addToCartBtn(PRODUCTS.backpack.itemName)).toHaveText('Add to cart');
        await inventoryPage.addItemToCart(PRODUCTS.backpack.itemName);
        await expect(menuPage.shoppingCartBadge).toBeVisible();
        await expect(menuPage.shoppingCartBadge).toHaveText('1');
        await expect(inventoryPage.removeFromCartBtn(PRODUCTS.backpack.itemName)).toHaveText('Remove');
    })

    test('[HP] - Remove Product from cart - should update cart badge and empty cart', { tag: '@regression',}, async ({ page }) => {
        await inventoryPage.addItemToCart(PRODUCTS.backpack.itemName);
        await inventoryPage.removeItemFromCart(PRODUCTS.backpack.itemName);
        await expect(menuPage.shoppingCartBadge).not.toBeVisible();
        await expect(inventoryPage.addToCartBtn(PRODUCTS.backpack.itemName)).toHaveText('Add to cart');
    })
        
})