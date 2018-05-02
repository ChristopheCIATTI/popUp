// File of test javascript with mocha & chai

// require the module which you test
var popUp = require("../lib/popUp/index.js");

// require the test library javascript
var mocha = require("mocha");
var chai = require("chai");

// require DOM
var document = require("jsdom").jsdom(
	"<!doctype html><html><head></head><body></body></html>");
var window = document.defaultView;
window.document = document;

// init the module
popUp.init(window);

// below the tests
// describe and check if poUp.js is a module
// to check use chai.assert and check if popUp is a object
mocha.describe("popUp", function() {
    mocha.it("popUp.js is a module ?", function() {
        chai.assert("object" === typeof popUp);
    });

    // describe the test
    mocha.describe("Methods", function () {
    	// write test here
    	
    	//check if popUp.popUpDisplay run 
        mocha.it("Does popUpDisplay create popUp ?", function(){
            popUp.popUpDisplay("foo");
        });

        // Check is popUpDisplay is a function
        mocha.it("popUpDisplay is a function ?", function(){
     		chai.assert("function" === typeof popUp.popUpDisplay);
    	});
	});
});
