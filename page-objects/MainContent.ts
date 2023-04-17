import { expect, Locator, Page } from "@playwright/test";

export class MainPage {
    readonly page: Page;
    readonly searchField: Locator;
    readonly linkNews: Locator;
    readonly buttonBuy1: Locator;
    readonly buttonCard: Locator;
    readonly cardItemCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByPlaceholder("Поиск");
        this.buttonBuy1 = page.locator("//li[1]//button[contains(@class,'buy_button')]");
        this.buttonCard = page.locator(".buttona.smallcart");
        this.buttonCard = page.locator(".cart_items_count");
    };

    async visitCacaocultura() {
        await this.page.goto("https://cacaocultura.ru/")
    };

    async searchFill(searchContent: string) {
        await this.searchField.fill(searchContent);
        await this.page.keyboard.press("Enter");
    };

    async clickButtonBuy1() {
        await this.buttonBuy1.click();
    };

    async gotoCard() {
        await this.buttonCard.click();
    };
}