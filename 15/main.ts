let guests : string[] = ["Huzaifa", "Umair", "Uzair"]
let unableTOAttend : string = guests.splice(2,1)[0];
console.log(`${unableTOAttend} can't make to the dinner`);
guests.push("Haris")
guests.forEach(names =>{
    console.log(`Dear ${names} would you like to join me for dinner`);
    
})
