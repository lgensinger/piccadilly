/*************************** STYLE ***************************/

// app stylesheets
var styleBase = "./style/app/";
var systemBase = styleBase + "system/";
var platformBase = styleBase + "platforms/";
var globalBase = styleBase + "global/";
var themeBase = styleBase + "themes/";
var lightBase = themeBase + "light/";

// reset
require(systemBase + "reset.css");

// design system
require("./style/app/system");

// base platform
require(platformBase + "desktop.css");

// global components

// themes
require(themeBase + "dark.css");
require(themeBase + "light.css");

/*************************** MODULES ***************************/

// app initialized
var app = window.app = (function(app) {
    app.init = function() {
        // any special stuff here
    };
    return app;
}(app || {}));

// initialize app
app.init();

// vanilla JS modules
require("./factories");
require("./components");
require("./controllers");