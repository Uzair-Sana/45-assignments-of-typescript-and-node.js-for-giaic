function show_magicians(magicans:string[]){
    magicans.forEach(name => console.log(name))
}
function make_great(magicans:string[]){
    return magicans.map(name =>`The Great ${name}`)
} 
let magicans_names : string[] = ["Ali","Umair","Osama"]
let Great_magicans = make_great(magicans_names)
show_magicians(Great_magicans)