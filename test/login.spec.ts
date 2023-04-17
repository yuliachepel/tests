import { test, expect } from "@playwright/test";
import { LoginForm } from "../page-objects/components/LoginForm";
import { MainPage } from "../page-objects/MainContent";


test.describe("Login and logout", () => {
    let loginForm: LoginForm;
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        loginForm = new LoginForm(page);
        mainPage = new MainPage(page);

        await mainPage.visitCacaocultura();
    });

    test("Login with valid credentials", async ({ page }) => {
        await loginForm.login("t3sterovna@yandex.ru", "pir0g0k25");

        await expect(loginForm.logoutButton).toBeVisible();
    });

    test("Login with invalid credentials", async ({ page }) => {
        await loginForm.login("wrong email", "wrong password");

        await expect(loginForm.errorMessage).toBeVisible();
    });

    test("Logout", async ({ page }) => {
        await loginForm.login("t3sterovna@yandex.ru", "pir0g0k25");
        await loginForm.logout();
        await expect(loginForm.logoutButton).not.toBeVisible();
    });
});