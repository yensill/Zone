describe("AutomationPractice",function()
{
    /*Import PagesObjects*/
    var homePage    = require("../PageObject/01 HomePage.js");
    var orderItems  = require("../PageObject/02 OrderItems.js");
    var cartSummary = require("../PageObject/03 Cart_Summary.js");
    var signIn      = require("../PageObject/04 Cart_Signin.js");
    var address     = require("../PageObject/05 Cart_Address.js");
    var shipping    = require("../PageObject/06 Cart_Shipping.js");
    var payment     = require("../PageObject/07 Cart_Payment.js");
    var dd          = require("../Data/TestData.js");

    /*Setup function to launch the site*/
    beforeEach(function()
    {
        homePage.getURL();
    })

    /* Function to convert the Date inputted to Day, Month, Year*/
    function dateConvert()
    {
       var date1 = new Date(dd.data.date_data);
       var day   = date1.getDate();
       var month = date1.getMonth();
       var year  = date1.getFullYear();
       return {day,month,year}
   }

   /*Test Spec*/
    it("PurchaseItems",function()
    {

        var EC = protractor.ExpectedConditions;
        var amount;

        /*Navigate to a Tab on HomePage*/
        browser.wait(EC.visibilityOf(homePage.signIn),4000);
        homePage.tShirts_tab.click();
        
        /*Customising the item and Adding item to Cart*/
        browser.wait(EC.visibilityOf(orderItems.tShirt_subTab),4000);
        browser.actions().mouseMove(orderItems.faded_tShirt).perform();
        orderItems.quickView.click();
        browser.sleep(1000);
        browser.switchTo().frame(0);
        browser.wait(EC.visibilityOf(orderItems.addToCart),4000);
        orderItems.quantity.clear();
        orderItems.quantity.sendKeys(dd.data.noOfItems_data);

        orderItems.selectSize.each(function(item)
       {
           item.getText().then(function(text)
           {
            if(text == dd.data.size_data )
                {
                    item.click();
                } 
            
           })
       }) 

       if(dd.data.color_data = 'Blue')
       {
       element(by.name("Blue")).click();
       }
       else if(dd.data.color_data = 'Orange')
       {
        element(by.name("Orange")).click();
       }

       orderItems.addToCart.click();
       browser.switchTo().defaultContent();
       browser.wait(EC.visibilityOf(orderItems.checkOut),4000);
       orderItems.checkOut.click();

       /*Assertion : Validating if correct no of items are shown on cart*/
       expect(orderItems.cartCount.getText()).toEqual(dd.data.noOfItems_data);
        
       /* Cart Summary */
       browser.wait(EC.visibilityOf(cartSummary.summary_checkOut),4000);   
       cartSummary.summary_checkOut.click();

       /*Cart_SignIn*/
       browser.wait(EC.visibilityOf(signIn.createAccount),4000); 
       signIn.enterEmail.sendKeys(dd.data.email_data);
       signIn.createAccount.click();
       browser.wait(EC.visibilityOf(signIn.Register),4000);
       browser.actions().mouseMove(signIn.accountForm).perform();
 
       if(dd.data.title_data == 'Mr.')
       {
            signIn.title_Mr.click();
       }
       else if (dd.data.title_data == 'Mrs.')
       {
            signIn.title_Mrs.click();
       }

       signIn.firstName.sendKeys(dd.data.firstName_data);
       signIn.lastName.sendKeys(dd.data.lastName_data);
       expect(signIn.email.getAttribute("value")).toBe(dd.data.email_data);
       signIn.password.sendKeys(dd.data.password_data);

       browser.sleep(1000);

       signIn.selectDays.each(function(item)
       {
        item.getAttribute("value").then(function(value)
            {
                if(value == dateConvert().day)
                {
                    item.click();
                }
            })
       })
       signIn.selectMonths.each(function(item)
       {
        item.getAttribute("value").then(function(value)
            {
               if(value == dateConvert().month)
               {
                   item.click();
               }
            })
       })

       signIn.selectYears.each(function(item)
       {
        item.getAttribute("value").then(function(text)
            {
               if(text == dateConvert().year)
               {
                   item.click();
               }
            })
       })

       signIn.company.sendKeys(dd.data.company_data);
       signIn.address1.sendKeys(dd.data.address1_data);
       signIn.address2.sendKeys(dd.data.address2_data);
       signIn.city.sendKeys(dd.data.city_data);

       signIn.selectState.each(function(item)
       {
            item.getText().then(function(text)
            {
                if(text == dd.data.state_data)
                {
                    item.click();
                }
            })
       })

       signIn.postCode.sendKeys(dd.data.postcode_data);

       signIn.selectCountry.each(function(item)
       {
        item.getText().then(function(text)
            {
               if(text == dd.data.country_data)
               {
                   item.click();
               }
            })
       })

       signIn.phone.sendKeys(dd.data.phone_data);
       signIn.mobile.sendKeys(dd.data.mobile_data);
       signIn.Register.click();

       
       /*Cart_Address Page*/
       browser.wait(EC.visibilityOf(address.proceedCheckout),4000); 
       address.proceedCheckout.click();

       /*Cart_Shipping*/
       browser.wait(EC.visibilityOf(shipping.shipping_CheckOut),4000);
       shipping.agreeToTerms.click();
       shipping.shipping_CheckOut.click();

       /*Cart_Payment*/
       browser.wait(EC.visibilityOf(payment.payByBankWire),4000);
       payment.payByBankWire.click();
       browser.wait(EC.visibilityOf(payment.confirmPayment),4000);
       payment.confirmPayment.click();
       browser.wait(EC.titleContains('Order confirmation - My Store'),4000);

       /*Assertion*/
       expect(payment.successMessage.getText()).toBe(dd.data.successMsg_data);
       browser.sleep(1000);

       /*SignOut*/
       homePage.signOut.click();
    
    })
})
