class womenFashionPage 
{
    constructor(page)
    {
        this.page = page;   
        this.dressesLink = page.getByRole('link', { name: 'Dresses', exact: true });
    }
}
module.exports = {womenFashionPage};