class productDetailsPage
{
    constructor(page)
    {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-button');
        this.dressesLink = page.getByRole('link', { name: 'Dresses', exact: true });
        this.blazerLink = page.getByRole('link').filter({ hasText: "Cinq a Sept Women's Crepe Khloe Blazer" });
    }
}
module.exports = {productDetailsPage};