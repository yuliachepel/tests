import { expect, Locator, Page } from "@playwright/test";

export class HeaderPage {
    readonly page: Page;
    readonly linkAbout: Locator;
    readonly linkDeliveryCalculation: Locator;


    constructor(page: Page) {
        this.page = page;
        this.linkAbout = page.getByRole('link', { name: 'О проекте' });
        this.linkDeliveryCalculation = page.getByRole('link', { name: 'Расчёт доставки' });
    };

    async gotoAbout() {
        await this.linkAbout.click();
    };

    async gotoDeliveryCalculation() {
        await this.linkDeliveryCalculation.click();
    };
}