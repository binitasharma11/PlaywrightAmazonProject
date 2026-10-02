const { test, expect } = require('@playwright/test');

const {headerNavigation} = require('../Pages/headerNavigation');
const {sideNavigation} = require('../Pages/sideNavigation');
const {cartPage} = require('../Pages/cartPage');
const {productDetailsPage} = require('../Pages/productDetailsPage');

test.use({
    storageState: 'playwright/.auth/amazon.json'
});

test('Amazon account page', async ({ page }) => {

    const HeaderNavigation = new headerNavigation(page);
    const SideNavigation = new sideNavigation(page);
    const ProductDetailsPage = new productDetailsPage(page);
    const CartPage = new cartPage(page);

    await page.goto('https://www.amazon.com/');
    await HeaderNavigation.menuIcon.click();
    await SideNavigation.clothingShoesJewelryWatchesLink.click();
    await SideNavigation.womenLink.click(); //This works with chrome and firefox but not with webkit. So remove .nth(1) to make it work with webkit.
    await ProductDetailsPage.dressesLink.click();
    await ProductDetailsPage.blazerLink.click();
    await ProductDetailsPage.addToCartButton.click();
    await HeaderNavigation.cartIcon.click();
    await CartPage.proceedToCheckoutButton.click();
    await page.goBack();
    console.log("Number of Item in cart: " + await HeaderNavigation.cartIcon.textContent());

    //console.log(await page.title());
    //await page.pause();

    //await expect(page).toHaveTitle(/Amazon/i);

    // Your test starts here.
    // No username/password/OTP required.

});