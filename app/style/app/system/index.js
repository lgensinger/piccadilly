// keep cascading in mind when ordering the array
var list = [
    "forms",
    "palettes",
    "shapes",
    "tables",
    "typography"
];

// add dependent modules
for (var i=0; i < list.length; i++) {
    
    require("./" + list[i] + ".css");
    
}