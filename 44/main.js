"use strict";
function make_sandwich(...items) {
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(itemName => console.log(itemName));
    console.log("Now Enjoy Sandwich");
}
make_sandwich("Bread", "Butter");
make_sandwich("Chicken", "Cheese", "Eggs");
make_sandwich("Bread", "Butter", "Chicken", "Tomato", "Cheese", "Eggs", "Mayo");
