function show_magicians(magicans:string[]){
    magicans.forEach(name => console.log(name))
}
function make_great(magicans:string[]){
    return magicans.map(name =>`The Great ${name}`)
} 
let magicans_names : string[] = ["Ali","Umair","Osama"]
let copy_magicans_names = magicans_names.slice()

let copy_great_magicians = make_great(copy_magicans_names)
console.log("\nOriginal Array:");
show_magicians(magicans_names)
console.log("\nCopied Array:");
show_magicians(copy_great_magicians)

