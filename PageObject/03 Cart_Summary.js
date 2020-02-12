function cart_summary()
{
    
    this.summary_checkOut   = element(by.className("columns-container")).element(by.css("a[title='Proceed to checkout']"));

}
module.exports = new cart_summary();