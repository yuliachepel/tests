import { expect, Locator, Page } from "@playwright/test";

export class FooterPage {
    readonly page: Page;
    readonly linkPayment: Locator;
    readonly linkUserAgreement: Locator;


    constructor(page: Page) {
        this.page = page;
        this.linkPayment = page.getByRole('link', { name: 'Оплата и доставка' });
        this.linkUserAgreement = page.getByRole('link', { name: 'Пользовательское соглашение' });
    };

    async gotoPayment() {
        await this.linkPayment.click();
    };

    async gotoUserAgreement() {
        await this.linkUserAgreement.click();
    }
}