import { expect, Locator, Page } from "@playwright/test";

export class LoginForm {
    readonly page: Page;
    readonly signinBatton: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signinBatton = page.getByRole('link', { name: 'Войти' });
        this.emailField = page.getByPlaceholder("E-mail");
        this.passwordField = page.getByRole('textbox', { name: 'Пароль' });
        this.loginButton = page.locator("//a[contains(@class, 'button')][normalize-space(.)='Войти']");
        this.logoutButton = page.locator(".logout");
        this.errorMessage = page.locator("//p[contains(@class, 'errorCnt')][normalize-space(.)='Неверный логин или пароль.']");

    };

    async login(email: string, password: string) {
        await this.signinBatton.click();
        await this.emailField.type(email);
        await this.passwordField.type(password);
        await this.loginButton.click();
    };

    async logout() {
        await this.logoutButton.click();
    };

}