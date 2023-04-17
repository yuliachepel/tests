import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
const config: PlaywrightTestConfig = {
    testDir: "test/",
    timeout: 30000,
    expect: {
        timeout: 5000,
    },
    retries: 1,
    reporter:
        [
            ["list"],
            ["html"],
        ],
    use: {
        baseURL: "https://cacaocultura.ru/",
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 5000,
        video: "off",
        screenshot: "off",
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
    ],
};

export default config;
