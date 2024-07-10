"use strict";
function show_magicians(magicans) {
    magicans.forEach(name => console.log(name));
}
function make_great(magicans) {
    return magicans.map(name => `The Great ${name}`);
}
let magicans_names = ["Ali", "Umair", "Osama"];
let Great_magicans = make_great(magicans_names);
show_magicians(Great_magicans);
