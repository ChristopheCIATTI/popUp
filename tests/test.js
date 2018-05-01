var popUp = require("../../index.js");

var mocha = require("mocha");
var chai = require("chai");

var document = require("jsdom").jsdom(
	"<!doctype html><html><head></head><body></body></html>");
var window = document.defaultView;
window.document = document;

popUp.init(window);
mocha.describe("PopUp", function() {
	mocha.it("PopUp.js is a module ?", function() {
		chai.assert("object" === typeof popUp);
	});

	mocha.describe("Methods", function() {
		popUp.popUpDisplay("foo");
		// check see you soon

		chai.assert(
			"object" === typeof window.document.body.lastChild &&
			"popUp" === window.document.body.lastChild.getAttribute("id") &&
			"DIV" === window.document.body.lastChild.tagName
		);
		window.document.body.removeChild(
			window.document.body.lastChild
		);
	});
	mocha.it("popUpDisplay is a function ?", function() {
		chai.assert("function" === typeof popUp.popUpDisplay);
	});
});
