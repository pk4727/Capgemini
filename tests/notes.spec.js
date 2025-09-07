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


// locating elements by property / CSS / XPath
test("locating unique or single element", async ({ page }) => {
    await page.goto('/')

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

    await page.pause()
})


test("locating comman or multiple element", async ({ page }) => {
    await page.goto('/index.html')

    // wait for loading page fully
    await page.locator('a').first().waitFor()   // waits specifically for the first <a> to be ready.
    await page.waitForSelector("a")             // waits for any <a> to appear.
    await page.pause()                          // halts execution for debugging.

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


/*
Locators : Locators are the central piece of Playwright's auto-waiting and retry-ability. It represent a way to find element(s) on the page at any moment.

    These are the recommended built-in locators.
        page.getByAltText()     to locate an element, usually image, by its text alternative. 
        page.getByPlaceholder() to locate an input by placeholder.
        page.getByText()        to locate by text content.
        page.getByRole()        to locate by explicit and implicit accessibility attributes.
        page.getByLabel()       to locate a form control by associated label's text.   
        page.getByTitle()       to locate an element by its title attribute.
        page.getByTestId()      to locate an element based on its data-testid attribute (other attributes can be configured).
*/
test("Built-In Locator", async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // <img alt="company-branding" src="/img/playwright-logo.svg" width="100" />
    const brandLogo = page.getByAltText('company-branding');
    await expect(brandLogo).toBeVisible();

    // <input type="email" placeholder="Username" />
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    // <span>Username : Admin</span>
    const username = page.getByText('Username : Admin');
    await expect(username).toBeVisible();

    // <button type="submit">Submit</button>
    await page.getByRole("button", { type: "submit" }).click();

    // <label>Password <input type="password" /></label>
    // await page.getByLabel('Password').fill('secret');

    // <span title='Issues count'>25 issues</span>
    // await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

    // <button data-testid="directions">Itinéraire</button>
    // await page.getByTestId('directions').click();

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

})


/*
🔹 Assertions type
expect      → hard check, stops test on failure.
expect.soft → soft check, continues test even if failed.

🔹 Page-level Assertions
toHaveURL(url) → Page has the exact URL.
toHaveTitle(title) → Page has the exact title.

🔹 Visibility & State
toBeVisible() → Element is visible on the page.
toBeHidden() → Element is hidden (not visible but still in DOM).
toBeEnabled() → Element is enabled (you can interact with it).
toBeDisabled() → Element is disabled.
toBeChecked() → Checkbox or radio button is selected.
not.toBeChecked() → Checkbox or radio button is not selected.

🔹 Text & Content
toHaveText(text) → Element has exact text match.
toContainText(substring) → Element’s text contains substring.
toHaveValue(value) → Input field has the given value.
toHaveAttribute(name, value) → Element has the given attribute and value.

🔹 Count & Collections
toHaveCount(n) → Number of matched elements equals n.
toHaveClass(className) → Element has the expected CSS class.
*/
test("Assertion", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register");

    // ✅ URL & Title
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");   // page has correct URL
    await expect(page).toHaveTitle("nopCommerce demo store. Register");      // page has correct title
    // await expect.soft(page).toHaveTitle("nopCommerce demo store.");          // this fails but the test will continue running (hedded mode)

    // ✅ Interactions
    await page.locator("#gender-male").click();  // select Male radio button
    const box = page.locator("#Newsletter");     // locate newsletter checkbox
    await page.locator("#FirstName").fill("Pk"); // type FirstName

    // ✅ Assertions
    await expect(page.locator('.header-logo')).toBeVisible();                         // logo is visible
    await expect(page.locator('#small-searchterms')).toBeEnabled();                   // search box is enabled
    await expect(page.locator('#small-searchterms')).not.toBeDisabled();              // search box is not disabled
    await expect(page.locator("#gender-male")).toBeChecked();                         // Male radio button is selected
    await expect(page.locator("#Newsletter")).toBeChecked();                          // Newsletter checkbox is selected
    await expect(page.locator("#register-button")).toHaveAttribute("type", "submit"); // register button has type submit
    await expect(page.locator(".page-title")).toHaveText("Register");                 // complete text match
    await expect(page.locator(".page-title")).toContainText("Regis");                 // partial text match
    await expect(page.locator("#FirstName")).toHaveValue("Pk");                       // FirstName input contains "Pk"
    await expect(page.locator('select#customerCurrency option')).toHaveCount(2);      // dropdown has 2 options

    await page.pause()
});