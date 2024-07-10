"use strict";
function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let my_car = create_car("toyota", "Corolla", "color:Black", "year:2023");
console.log(my_car);
console.log(create_car("Ford", "Fiesta", "color:red", "sunroof:true"));
