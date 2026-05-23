export class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueBtn = page.locator('[data-test="continue"]');
    }

    async fillCheckoutInformation(firstname,  lastname, postalCode) {
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.postalCodeInput.fill(postalCode);
        await this.continueBtn.click();
    }
}