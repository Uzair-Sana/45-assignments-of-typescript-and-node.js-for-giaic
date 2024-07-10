let guests : string[] = [ "Huzaifa","Umair", "Haris" ]
console.log(`Great news! I found a bigger dinner table`);
guests.unshift("Awais")
guests.splice(Math.floor(guests.length/2),0,"ShamsUrRehman" )
guests.push("Mehar")
guests.forEach(names => {
    console.log(`Dear ${names} would you like to join me dor dinner?`);
    
})
