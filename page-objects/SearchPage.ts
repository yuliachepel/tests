import { expect, Locator, Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly headerH2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerH2 = page.locator("h2");
    };


}