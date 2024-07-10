"use strict";
let userNames = ["Huzaifa", "Uzair", "Admin", "Haris", "Ali"];
userNames = [];
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(Names => {
        if (Names == "Admin") {
            console.log(`Hello ${Names}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${Names}, thank you for logging in again.`);
        }
    });
}
