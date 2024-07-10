function make_shirt(size: string = 'Large', printMessage: string ="I love TypeScript" ){
    console.log(`Making a ${size} t-shirt with the message "${printMessage}" printed on it`);
}
make_shirt()
make_shirt("Medium")
make_shirt("Small","Coding is easy")