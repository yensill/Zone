function shipping()
{

    this.agreeToTerms       = element(by.id("order")).element(by.id("cgv"));
    this.shipping_CheckOut  = element(by.buttonText("Proceed to checkout"));

};
module.exports = new shipping();