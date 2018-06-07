((root, factory) => {
	if (typeof module === "object" && module.exports) {
		module.exports = factory();
	} else {
		root.popUp = factory(root);
	}

})(this, (root) => {

	if (root) {
		let style = root.document.createElement("style");
		style.type = "text/css";

		let css = root.document.createTextNode("div {}");

		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(css);
		}
		root.document.getElementsByTagName("head")[0].appendChild(style);
	}

	let getMessageFunction = (message) => {
		if (typeof message !== "string") {
			throw new Error("Message must be string");
		}

		let div = root.document.createElement("div");
		let p = root.document.createElement("p");
		let aClose = root.document.createElement("a");
		let buttonConfirm = root.document.createElement("button");
		let buttonCancel = root.document.createElement("button");

		let pText = root.document.createTextNode(message);
		aClose.innerHTML = "&#x274c;";
		let buttonConfirmText = root.document.createTextNode("I visit");
		let buttonCancelText = root.document.createTextNode("Cancel");

		p.appendChild(pText);
		buttonConfirm.appendChild(buttonConfirmText);
		buttonCancel.appendChild(buttonCancelText);

		div.appendChild(aClose);
		div.appendChild(p);
		div.appendChild(buttonConfirm);
		div.appendChild(buttonCancel);
		div.setAttribute("id", "PopUpStyle");
		div.style.boxShadow = "0 75px 100px #black";

		aClose.onclick = () => {
			let parent = aClose.parentNode;
			parent.style.left = "0%";
			buttonConfirm.style.background = "#C60800";
			buttonCancel.style.background = "#C60800";
			parent.style.background = "#C60800";
			parent.style.opacity = 0;
			window.setTimeout ( () =>  {
				parent.parentNode.removeChild(parent);
			}, 1000);
		};

		buttonConfirm.onclick = () => {
			buttonConfirm.onclick = null;
			let parent = buttonConfirm.parentNode;
			buttonConfirm.style.background ="green";
	        buttonCancel.style.background ="green";
	        parent.style.background ="green";
	        parent.style.opacity = 0;
	        window.setTimeout (() => {
	        	parent.parentNode.removeChild(parent);
	        }, 1000);
		};

		buttonCancel.onclick = () => {
			var parent = buttonCancel.parentNode;
			parent.style.left = "100%";
			buttonCancel.style.background ="yellow";
	        buttonConfirm.style.background ="yellow";
	        parent.style.background ="yellow";
	        parent.style.opacity = 0;
	        window.setTimeout(() => {
	        	parent.parentNode.removeChild(parent);
	        }, 1000);
		};
		return div;
	};

	let log = (messageFunction) => {
		if(!(messageFunction instanceof root.HTMLElement) || ! root.document.body) {
			throw new Error("Require a valid document an a body");
		}
		root.document.body.appendChild(messageFunction);
		messageFunction.clientHeight;
		messageFunction.style.left = "20%";
	};
	
	return (() => {
		let self = {};
		self.init = () => {
			if(!window || !window.document) {
				throw new Error("popUp requires a window with a document");
			}
		root = window;
		};
		self.popUpDisplay = (message) => {
			let messageFunction = getMessageFunction(message);
			log(messageFunction);
		};
		return self;
	})();

 });
