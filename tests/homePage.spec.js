// const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test';


// check title and url
test("Home", async ({ page }) => {
    await page.goto("/")

    const pageTitle = await page.title()
    console.log("Title:", pageTitle)
    await expect(page).toHaveTitle('STORE')

    const pageURL = page.url()
    console.log("URL: " + pageURL)
    await expect(page).toHaveURL("https://demoblaze.com/")

    await page.pause()
})


// locating elements by property / CSS / XPath  -> unique or multiple
test("locating element", async ({ page }) => {
    await page.goto('/')

    // ================================================== single (unique locator) ===============================================================

    // await page.locator('[id="login2"]').click(); // by property
    // await page.locator("id=login2").click();     // by property
    // await page.locator("#login2").click();       // by CSS
    await page.click("#login2");                    // by CSS

    // by CSS
    await page.locator("#loginusername").fill('pavanol');
    // await page.locator("#loginusername").type('pavanol');
    // await page.fill("#loginusername", "pavanol");
    // await page.type("#loginusername", "pavanol");
    await page.locator("#loginpassword").fill('test@123');

    // by XPath
    // await page.locator("//button[normalize-space()='Log in']").click()
    await page.click("//button[normalize-space()='Log in']")



    // ================================================== multiple (comman locator) ===============================================================

    await page.locator('a').first().waitFor() // waitfor loading page fully
    await page.waitForSelector("a")

    // ------------------- locator -----------------

    // page.locator + .count()
    const linkCount = page.locator("a")   // comman locator of all link
    const count = await linkCount.count()
    console.log({ count })

    // page.locator() + .allInnerTexts() → gives you an array of strings directly.
    const products = await page.locator("div #tbodyid h4 a").allInnerTexts();
    // const products = await page.locator(".card-title a").allInnerTexts();
    for (const product of products) {
        console.log(product)
    }

    // ------------------ $$ ----------------

    // page.$$ + .length
    const linksLength = await page.$$("a") // $$ = all and returns an array of ElementHandles as promise)
    const len = linksLength.length;
    console.log({ len })

    // page.$$ + .textContent() → gives you an array of ElementHandles, and you manually extract their text.
    const products2 = await page.$$(".card-title a");
    for (const product of products2) {
        console.log(await product.textContent())
    }

    await page.pause()
})


// Assertion on login elements
test("Assertion on element", async ({ page }) => {
    await page.goto('/')

    await page.locator("#login2").click();
    await expect(page.locator('#logInModalLabel')).toHaveText('Log in'); // Assertion that login popup is vissible

    const username = page.locator("#loginusername");
    await username.fill('pavanol');
    await expect(username).toHaveValue('pavanol');                      // Assertion username is filled

    const password = page.locator("#loginpassword");
    await password.fill('test@123');
    await expect(password).toHaveValue('test@123');                     // Assertion password is filled

    await page.locator("//button[normalize-space()='Log in']").click();
    const logOut = page.locator("//a[normalize-space()='Log out']");
    await expect(logOut).toBeVisible();                                 // Assertion logout button is visible

    await page.pause()
})


// test.only("Built-In Locator", async ({ page }) => {

// })

test.only("locating element2", async ({ page }) => {
    await page.goto('/')

    await page.locator('a').first().waitFor() // waitfor loading page fully
    await page.waitForSelector("a")

    // ------------------- locator -----------------

    // page.locator + .count()
    const linkCount = page.locator("a")   // comman locator of all link
    const count = await linkCount.count()
    console.log({ count })

    // page.locator() + .allInnerTexts() → gives you an array of strings directly.
    const products = await page.locator("div #tbodyid h4 a").allInnerTexts();
    // const products = await page.locator(".card-title a").allInnerTexts();
    for (const product of products) {
        console.log(product)
    }

    // ------------------ $$ ----------------

    // page.$$ + .length
    const linksLength = await page.$$("a") // $$ = all and returns an array of ElementHandles as promise)
    const len = linksLength.length;
    console.log({ len })

    // page.$$ + .textContent() → gives you an array of ElementHandles, and you manually extract their text.
    const products2 = await page.$$(".card-title a");
    for (const product of products2) {
        console.log(await product.textContent())
    }

    await page.pause()
})
