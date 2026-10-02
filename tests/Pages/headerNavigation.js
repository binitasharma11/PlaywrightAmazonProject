class headerNavigation
{
    constructor(page)
    {
        this.page = page;
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.cartIcon = page.locator('#nav-cart-count');
        this.menuIcon = page.locator('.hm-icon');
    }
}
module.exports = {headerNavigation};