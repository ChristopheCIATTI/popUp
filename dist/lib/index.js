"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
	if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
		module.exports = factory();
	} else {
		root.popUp = factory(root);
	}
}(this, function (root) {

	if (root) {
		var style = root.document.createElement("style");
		style.type = "text/css";

		var css = root.document.createTextNode("div {}");

		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(css);
		}
		root.document.getElementsByTagName("head")[0].appendChild(style);
	}

	var getMessageFunction = function getMessageFunction(message) {
		if (typeof message !== "string") {
			throw new Error("Message must be string");
		}

		var div = root.document.createElement("div");
		var p = root.document.createElement("p");
		var aClose = root.document.createElement("a");
		var buttonConfirm = root.document.createElement("button");
		var buttonCancel = root.document.createElement("button");

		var pText = root.document.createTextNode(message);
		aClose.innerHTML = "&#x274c;";
		var buttonConfirmText = root.document.createTextNode("I visit");
		var buttonCancelText = root.document.createTextNode("Cancel");

		p.appendChild(pText);
		buttonConfirm.appendChild(buttonConfirmText);
		buttonCancel.appendChild(buttonCancelText);

		div.appendChild(aClose);
		div.appendChild(p);
		div.appendChild(buttonConfirm);
		div.appendChild(buttonCancel);
		div.setAttribute("id", "PopUpStyle");
		div.style.boxShadow = "0 75px 100px #black";

		aClose.onclick = function () {
			var parent = aClose.parentNode;
			parent.style.left = "0%";
			buttonConfirm.style.background = "#C60800";
			buttonCancel.style.background = "#C60800";
			parent.style.background = "#C60800";
			parent.style.opacity = 0;
			window.setTimeout(function () {
				parent.parentNode.removeChild(parent);
			}, 1000);
		};

		buttonConfirm.onclick = function () {
			buttonConfirm.onclick = null;
			var parent = buttonConfirm.parentNode;
			buttonConfirm.style.background = "green";
			buttonCancel.style.background = "green";
			parent.style.background = "green";
			parent.style.opacity = 0;
			window.setTimeout(function () {
				parent.parentNode.removeChild(parent);
			}, 1000);
		};

		buttonCancel.onclick = function () {
			var parent = buttonCancel.parentNode;
			parent.style.left = "100%";
			buttonCancel.style.background = "yellow";
			buttonConfirm.style.background = "yellow";
			parent.style.background = "yellow";
			parent.style.opacity = 0;
			window.setTimeout(function () {
				parent.parentNode.removeChild(parent);
			}, 1000);
		};
		return div;
	};

	var log = function log(messageFunction) {
		if (!(messageFunction instanceof root.HTMLElement) || !root.document.body) {
			throw new Error("Require a valid document an a body");
		}
		root.document.body.appendChild(messageFunction);
		messageFunction.clientHeight;
		messageFunction.style.left = "20%";
	};

	return function () {
		var self = {};
		self.init = function (window) {
			if (!window || !window.document) {
				throw new Error("popUp requires a window with a document");
			}
			root = window;
		};
		self.popUpDisplay = function (message) {
			var messageFunction = getMessageFunction(message);
			log(messageFunction);
		};
		return self;
	}();
}));
