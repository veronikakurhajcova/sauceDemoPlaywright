import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { InventoryItemPage } from '../pages/InventoryItemPage';
import { USERS, PRODUCTS } from '../helpers/credentials';

test('[HP] - Check product details - should display correct product information', { tag: '@regression', }, async ({page}) => {
    let loginPage = new LoginPage(page);
    let inventoryPage = new InventoryPage(page);
    let inventoryItemPage = new InventoryItemPage(page);

    await loginPage.navigate();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await inventoryPage.clickProductName(PRODUCTS.backpack.displayName);

    await expect(page).toHaveURL(/inventory-item\.html/);
    await expect(inventoryItemPage.inventoryItemName).toBeVisible();
    await expect(inventoryItemPage.inventoryItemName).toContainText(PRODUCTS.backpack.displayName);
    await expect(inventoryItemPage.inventoryItemPrice).toBeVisible();
    await expect(inventoryItemPage.inventoryItemPrice).toContainText(PRODUCTS.backpack.price);
    await expect(inventoryItemPage.inventoryAddToCartBtn).toBeVisible();
    await expect(inventoryItemPage.inventoryAddToCartBtn).toBeEnabled();

})
