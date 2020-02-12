function signIn()
{

    this.enterEmail     = element(by.id("create-account_form")).element(by.id("email_create"));
    this.createAccount  = element(by.buttonText("Create an account"));
    this.accountForm    = element(by.id("account-creation_form"));
    this.title_Mr       = element(by.id("id_gender1"));
    this.title_Mrs      = element(by.id("id_gender2"));
    this.firstName      = element(by.id("customer_firstname"));
    this.lastName       = element(by.id("customer_lastname"));
    this.email          = element(by.id("email"));
    this.password       = element(by.id("passwd"));
    this.days           = element(by.id("days"));
    this.selectDays     = this.days.all(by.tagName("option"));
    this.months         = element(by.id("months"));
    this.selectMonths   = this.months.all(by.tagName("option"));
    this.years          = element(by.id("years"));
    this.selectYears    = this.years.all(by.tagName("option"));
    this.company        = element(by.id("company"));
    this.address1       = element(by.id("address1"));
    this.address2       = element(by.id("address2"));
    this.city           = element(by.id("city"));
    this.state          = element(by.id("id_state"));
    this.selectState    = this.state.all(by.tagName("option"));
    this.postCode       = element(by.id("postcode"));
    this.country        = element(by.id("id_country"));
    this.selectCountry  = this.country.all(by.tagName("option"));
    this.phone          = element(by.id("phone"));
    this.mobile         = element(by.id("phone_mobile"));
    this.Register       = element(by.buttonText("Register"));

};
module.exports = new signIn();
