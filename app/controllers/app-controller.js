var config = require("../app-frontend-config");
var app = window.app;

require("../components/example-component");

app.appController = (function() {
    
    var exampleComponent = app.exampleComponent;
    
    // add theme config to body tag
    document.body.classList.add(config().theme.ui.current);
        
    // add my component
    exampleComponent.render("h1", document.body, "this is an example");
    
})();