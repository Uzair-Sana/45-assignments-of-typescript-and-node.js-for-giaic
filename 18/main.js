"use strict";
let places = ["Qatar", "America", "Switzerland", "China", "Japan"];
//print in original order
console.log("Original order:", places);
//print in alphabetical order
console.log("Alphabetical order:", places.slice().sort());
//print in original order
console.log("Original order:", places);
//print in reversed alphabetical order
console.log("Reverse alphabetical order:", places.slice().sort().reverse());
//print in original order
console.log("Original order:", places);
//print in reversed order
places.reverse();
console.log("Reversed order:", places);
//print in original order
places.reverse();
console.log("Original order:", places);
//print in alphabetical order
places.sort();
console.log("Alphabetical order:", places);
//print in reversed alphabetical order
places.reverse();
console.log("Reverse alphabetical order:", places);
