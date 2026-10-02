class cartPage
{
    constructor(page)
    {
        this.page = page;
        this.proceedToCheckoutButton = page.locator("input[value='Proceed to checkout']");
    }
}
module.exports = {cartPage};