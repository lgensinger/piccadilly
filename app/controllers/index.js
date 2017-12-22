// controller prefixes
var list = [
    "app",
    "event"
];

// add dependent modules
for (var i=0; i < list.length; i++) {
    
    require("./" + list[i] + "-controller");
    
}