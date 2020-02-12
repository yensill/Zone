function homePage()
{
    this.signIn         = element(by.partialLinkText('Sign in'));
    this.women_tab      = element(by.linkText("WOMEN"));
    this.dresses_tab    = element(by.linkText("DRESSES"));
    this.tShirts_tab    = element(by.linkText("T-SHIRTS"));
    this.signOut        = element(by.linkText("Sign out"));

    this.getURL = function()
    {
        browser.get("http://automationpractice.com/");
    };

};
module.exports = new homePage();
