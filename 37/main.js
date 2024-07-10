"use strict";
function make_shirt(size = 'Large', printMessage = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${printMessage}" printed on it`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Coding is easy");
