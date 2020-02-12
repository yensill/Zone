function address()
{

    this.proceedCheckout = element(by.id("order")).element(by.buttonText("Proceed to checkout"));

};
module.exports = new address();
