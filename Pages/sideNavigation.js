class sideNavigation 
{
    constructor(page)
    {
        this.page = page;
        
        this.clothingShoesJewelryWatchesLink = page.getByText("Clothing, Shoes, Jewelry & Watches").first();
        this.womenLink = page.getByRole('link', { name: 'Women', exact: true }).nth(1);
        
    }
}
module.exports = {sideNavigation};