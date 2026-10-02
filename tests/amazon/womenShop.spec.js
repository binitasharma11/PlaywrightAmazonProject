const { test, expect } = require('@playwright/test');

const {headerNavigation} = require('../Pages/headerNavigation');
const {womenFashionPage} = require('../Pages/womenFashionPage');
const {sideNavigation} = require('../Pages/sideNavigation');

test.use({
    storageState: 'playwright/.auth/amazon.json'
});

test('Amazon account page', async ({ page }) => {

    const HeaderNavigation = new headerNavigation(page);
    const SideNavigation = new sideNavigation(page);
    const WomenFashionPage = new womenFashionPage(page);

    await page.goto('https://www.amazon.com/');
    await HeaderNavigation.menuIcon.click();
    await SideNavigation.clothingShoesJewelryWatchesLink.click();
    await SideNavigation.womenLink.click(); //This works with chrome and firefox but not with webkit. So remove .nth(1) to make it work with webkit.
    await WomenFashionPage.dressesLink.click();
    await page.getByRole('link').filter({ hasText: "Cinq a Sept Women's Crepe Khloe Blazer" }).click();
    await page.locator("#add-to-cart-button").click();
    await HeaderNavigation.cartIcon.click();
    await page.locator("input[value='Proceed to checkout']").click();
    await page.goBack();
    console.log("Number of Item in cart: " + await HeaderNavigation.cartIcon.textContent());

    //console.log(await page.title());
    //await page.pause();

    //await expect(page).toHaveTitle(/Amazon/i);

    // Your test starts here.
    // No username/password/OTP required.

});