function orderItems()
{
    this.tShirt_subTab= element(by.partialLinkText('T-shirts'));
    this.faded_tShirt = element(by.css('img[title = "Faded Short Sleeve T-shirts"]'));
    this.quickView    = element(by.cssContainingText("a[class = 'quick-view'] span","Quick view"));
    this.quantity     = element(by.name("qty"));
    this.size         = element(by.id('group_1'));
    this.selectSize   = this.size.all(by.tagName('option'));
    this.blueShirt    = element(by.name("Blue"));
    this.orangeShirt  = element(by.name("Orange"));
    this.addToCart    = element(by.partialButtonText("Add to cart"));
    this.checkOut     = element(by.css("a[title='Proceed to checkout']"));
    this.cartCount    = element(by.partialLinkText('Cart')).element(by.css("span[class='ajax_cart_quantity']"));

};
module.exports = new orderItems();