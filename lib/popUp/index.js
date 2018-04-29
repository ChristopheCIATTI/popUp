
var popUp = (function() {
    //Create tag style in a HTML document
    var style = document.createElement("style");
    style.type = "text/css";
    
    //Create div in a HTML document
    var css = document.createTextNode("div {}");
    
    //Check if style.stylesheet object exist
    //If style.stylesheet exist the css is load
    //Else css element is created
    if (style.stylesheet) {
        style.stylesheet.cssText = css;
    } else {
        style.appendChild(css);
    }
    
    // get head tag to append style 
    document.getElementsByTagName("head")[0].appendChild(style);
    
    var getMessageFunction = function(message) {
        
        // Check if the message variable is string
        //if is not string, Error is throw
        if(typeof message !== "string") {
            throw new Error("Message must be string");
        }
        
        /*
        * Create a element of the popup.
        * Div is the contener
        * P is the contener of the text
        * Close is the close button.
        * buttonComfirm button to comfirm
        * buttonCancel button to canceled  
        */
        var div = document.createElement("div");
        var p = document.createElement("p");
        var aClose = document.createElement("a");
        var buttonConfirm = document.createElement("button");
        var buttonCancel = document.createElement("button");
        
        /*
        * Create text nodes
        * pText :add an text node with message
        * close : add a unicode char at this element
        * buttonText : Adding the text at element si dessus
        * buttonTextCancel : Adding the text at element si dessus
        */
        var pText = document.createTextNode(message);
        aClose.innerHTML = "&#x274c;";
        var buttonConfirmText = document.createTextNode("I visit");
        var buttonCancelText = document.createTextNode("Cancel");
        
        /*
        *Adding text nodes and different elements
        */
        p.appendChild(pText);
        buttonConfirm.appendChild(buttonConfirmText);
        buttonCancel.appendChild(buttonCancelText);
        
        /*
         * Adding a style on the div popup element
         */   
        div.appendChild(aClose);
        div.appendChild(p);
        div.appendChild(buttonConfirm);
        div.appendChild(buttonCancel);
        
        /*
         * Adding a style on the div popUp element
         */  
        div.setAttribute("id", "PopUpStyle");
        div.style.boxShadow = "0 75px 100px #black";
        
		
	/*
         * Function who display an message in a div p
         * @returns {undefined}
         */	
        var confirm = function () {
            pText = document.createTextNode(" Welcome");
            p.appendChild(pText);
            div.insertBefore(p, div.firstChild);
        };
        
        /*
         *  Onclick event when click on X
         *  Remove the div with event
         */
        aClose.onclick = function () {
            var parent = aClose.parentNode;
            parent.style.left = "0%";
            buttonConfirm.style.background ="#C60800";
            buttonCancel.style.background ="#C60800";
            parent.style.background ="#C60800";
            parent.style.opacity = 0;
            window.setTimeout( function () {
                parent.parentNode.removeChild(parent);
            }, 1000);
       };
       
       /*
        * Onclick envent when click on this element
        * Remove the div with event
        * class confirm() function
        */
       buttonConfirm.onclick = function () {
            buttonConfirm.onclick = null;
            var parent = buttonConfirm.parentNode;
            buttonConfirm.style.background ="green";
            buttonCancel.style.background ="green";
            parent.style.background ="green";
            parent.style.opacity = 0;
            confirm();
            window.setTimeout( function () {
                parent.parentNode.removeChild(parent);
            }, 1000);
       };
       
       /*
        * Onclick envent when click on this element
        * Remove the div with event
        */
       buttonCancel.onclick = function () {
            var parent = buttonCancel.parentNode;
            parent.style.left = "100%";
            buttonCancel.style.background ="yellow";
            buttonConfirm.style.background ="yellow";
            parent.style.background ="yellow";
            parent.style.opacity = 0;
            window.setTimeout( function () {
                parent.parentNode.removeChild(parent);
            }, 1000);
        };
        
        return div;
    };
    
    /*
     * log function
     * Check the instance.
     */
    var log = function(messageFunction) {
        if(!(messageFunction instanceof window.HTMLElement) || !document.body) {
            throw new Error("require a valid document and a body");
        }
        document.body.appendChild(messageFunction);
        messageFunction.clientHeight;
        messageFunction.style.left = "20%";
    };
    
    /*
     * Return value
     * You can add other popup, add return value
     */
    return {
        popUpDisplay : function(message) {
            var messageFunction = getMessageFunction(message);
            messageFunction.getElementsByTagName("button")[0]
                .setAttribute("class", "welcome");
            log(messageFunction);
            
        }
    };
})();
