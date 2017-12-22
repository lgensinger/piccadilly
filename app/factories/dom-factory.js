var app = window.app;

app.domFactory = (function() {
    
    return {
        
        // add attributes to a dom element
        addAttributes: function(attrs, element) {
            
            // create array of attrs to add
            var attributes = (attrs === null || attrs === undefined) ? [] : Object.keys(attrs);
            
            // loop through attrs
            for (var i=0; i < attributes.length; i++) {
                
                var key = attributes[i];
                
                // add to element
                element.setAttribute(key, attrs[key]);
                
            }
            
        },
        
        // add a dom element
        addElement: function(dom, container, attrs, content) {
            
            var _self = this;
            
            // create element
            var element = document.createElement(dom);
            
            // add attributes
            _self.addAttributes(attrs, element);
            
            // check for content
            if (content !== undefined) {
                
                // add content
                element.textContent = content;
                
            }
            
            // add to container
            return container.appendChild(element);
            
        }
        
    };
    
})();