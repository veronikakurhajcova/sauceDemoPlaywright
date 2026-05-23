export class LoginPage {

    constructor(page) {

        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', {name: 'Login'});

        this.errorLoginMsg = page.locator('[data-test="error"]');
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

}