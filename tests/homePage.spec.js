import { test, expect } from '@playwright/test';

test.only("Home", async ({ page }) => {
    await page.goto("https://demoblaze.com/")

    const pageTitle = await page.title()
    console.log("Title:", pageTitle)
    await expect(page).toHaveTitle('STORE')

    const pageURL = page.url()
    console.log("URL: " + pageURL)
    await expect(page).toHaveURL("https://demoblaze.com/")

    await page.pause()
})