function payment()
{

    this.payByBankWire  = element(by.partialLinkText("Pay by bank wire"));
    this.confirmPayment = element(by.id("module-bankwire-payment")).element(by.buttonText("I confirm my order"));
    this.success        = element(by.css("div[class='box']"));
    this.successMessage = this.success.element(by.css("strong[class='dark']"));
    //element(by.css("strong[class='dark']"));

};
module.exports = new payment();