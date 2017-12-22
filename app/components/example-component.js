var app = window.app;

require("../factories/dom-factory");

app.exampleComponent = (function() {
    
    var domFactory = app.domFactory;
    
    return {
        
        // render component in dom
        render: function(element, container, content) {
            
            // attach to dom
            domFactory.addElement(element, container, null, content);
            
        }
        
    };
    
})();