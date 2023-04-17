import { test, expect } from "@playwright/test";
import { LoginForm } from "../page-objects/components/LoginForm";
import { FooterPage } from "../page-objects/components/Footer";
import { HeaderPage } from "../page-objects/components/Header";
import { MainPage } from "../page-objects/MainContent";
import { SearchPage } from "../page-objects/SearchPage";

test.describe("Go to FooterLink", () => {
    let mainPage: MainPage;
    let loginForm: LoginForm;
    let footerPage: FooterPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        loginForm = new LoginForm(page);
        footerPage = new FooterPage(page);

        await mainPage.visitCacaocultura();
    });

    test("Go to Payment and Delivery", async ({ page }) => {
        await footerPage.gotoPayment();
        await expect(page).toHaveURL("https://cacaocultura.ru/about/delivery.php");
    });

    test("Go to User Agreement", async ({ page }) => {
        await footerPage.gotoUserAgreement();
        await expect(page).toHaveURL("https://cacaocultura.ru/agreement/");
    });

});

test.describe("Go to HeaderLink", () => {
    let loginForm: LoginForm;
    let headerPage: HeaderPage;
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        loginForm = new LoginForm(page);
        headerPage = new HeaderPage(page);
        mainPage = new MainPage(page);

        await mainPage.visitCacaocultura();
    });

    test("Go to Page About", async ({ page }) => {
        await headerPage.gotoAbout();
        await expect(page).toHaveURL("https://cacaocultura.ru/about/");
    });

    test("Go to Delivery calculation", async ({ page }) => {
        await headerPage.gotoDeliveryCalculation();
        await expect(page).toHaveURL("https://cacaocultura.ru/delivery-calculation/");
    });
});

test.describe("Search", () => {
    let mainPage: MainPage;
    let searchPage: SearchPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        searchPage = new SearchPage(page);
        await mainPage.visitCacaocultura();
    });

    test("Go to searchPage", async ({ page }) => {
        await mainPage.searchFill("тест");
        await expect(page).toHaveURL(/search/);
    });
    test("Search with Invalid Value", async ({ page }) => {
        await mainPage.searchFill("Fdjffvfk");

        await expect(searchPage.headerH2).toHaveText("Поиск");
    });

    test("Search with Valid Value", async ({ page }) => {
        await mainPage.searchFill("Шоколад");

        await expect(searchPage.headerH2).toContainText("Найдено: ");
    });
});

test.describe("Add Purchase in Card", () => {
    let mainPage: MainPage;
    
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
              await mainPage.visitCacaocultura();
    });

    test("Add Purchase from catalog", async ({ page }) => {
        await mainPage.clickButtonBuy1();
        await expect(mainPage.buttonCard).toBeVisible();
        await expect(mainPage.buttonCard).toHaveClass("cart_items_count");
        await expect(mainPage.buttonCard).toContainText("1");
    });
   
    test("Go to Card", async ({ page }) => {
        await mainPage.clickButtonBuy1();
        await mainPage.gotoCard();
        await expect(page).toHaveURL("/cart/");
    });


});