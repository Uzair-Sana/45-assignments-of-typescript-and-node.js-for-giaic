"use strict";
let Apple = "Apple";
//Tests for equality and inequality with strings
console.log('Is Apple == "Apple"? I predict true!');
console.log(Apple == "Apple");
console.log('Is Apple != "Apple"? I predict false!');
console.log(Apple != "Apple");
//Tests using the lower case function
console.log('Is Apple.tolowercase() == "apple"? I predict true!');
console.log(Apple.toLowerCase() == "apple");
console.log('Is Apple.tolowercase() == "Apple"? I predict false!');
console.log(Apple.toLowerCase() == "Apple");
// Numerical tests involving equality and inequality, greater than 
//and less than, greater than or equal to, and less than or equal to
let five = 5;
let one = 1;
console.log('Is five == 5? I predict true!');
console.log(five == 5);
console.log('Is one != 1? I predict false');
console.log(one != 1);
console.log("Is five > one? I predict true");
console.log(five > one);
console.log("Is five < one? I predict false");
console.log(five < one);
console.log("Is one <= five? I predict true");
console.log(one <= five);
console.log("Is one >= five? I predict false");
console.log(one >= five);
//Tests using "and" and "or" operators
console.log(" Is Five != one and five > one? I predict true");
console.log(five != one && five > one);
console.log("Is five == one and five > one? I predict false");
console.log(five == one && five > one);
console.log("Is one == five or one < five? I predict true ");
console.log(one == five || one < five);
console.log("Is five == one or five < one? I predict false");
console.log(five == one || five < one);
//Test whether an item is in a array or not in a array
let fruits = ["orange", "banana", "apple"];
console.log("Is orange includes  in fruits array?  I predict true!");
console.log(fruits.includes("orange"));
console.log("Is orange not includes  in fruits array?  I predict false!");
console.log(!fruits.includes("orange"));
