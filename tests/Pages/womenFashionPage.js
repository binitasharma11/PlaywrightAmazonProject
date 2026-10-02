class womenFashionPage 
{
    constructor(page)
    {
        this.page = page;   
        this.dressesLink = page.getByRole('link', { name: 'Dresses', exact: true });
        this.blazerLink = page.getByRole('link').filter({ hasText: "Cinq a Sept Women's Crepe Khloe Blazer" });
    }
}
module.exports = {womenFashionPage};