let current_users : string[] = ["Huzaifa", "uzair", "Osama", "haris","Ali"];
let new_users :string[] = ["Hamid", "Ayesha","Uzair","Salman","Haris"]
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() == new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken`);
    }else{
        console.log(`This username ${new_one_user} is available`);
        
    }
})