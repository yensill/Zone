var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');								
								
exports.config = 								
{	
	//seleniumAddress: 'http://localhost:4444/wd/hub',		
    directConnact 	: true, //Direct Connection to the drivers bypassing selenium server
	specs			: ['./Tests/PurchaseItem.js'],							
	capabilities	: {'browserName':'chrome'}, 												
								
	onPrepare: function() {						
	browser.waitForAngularEnabled(false);		
	browser.driver.manage().window().maximize();								
    jasmine.getEnv().addReporter(								
	  new Jasmine2HtmlReporter
	  ({								
        savePath: 'target/screenshots/',								
        	takeScreenshots: true							
      })								
    );								
 	},								
	 jasmineNodeOpts: 
	 {								
	    showColors: true, 					
	 }							
};								
