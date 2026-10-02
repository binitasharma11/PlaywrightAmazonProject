class productDetailsPage
{
    constructor(page)
    {
        this.page = page;
        this.addToCartButton = page.locator("#add-to-cart-button");
    }
}
module.exports = {productDetailsPage};