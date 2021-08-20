// let mDrinks = drinks.filter(drinks = return drinks == "M...")


// let mDrinks = drinks.filter((drinks) => {
//     return drinks.startsWith("M");
// })

// console.log(mDrinks);

// let index = 0;
// let newArray = colors.map((color, index) => {
//     return {color: color, index: index}
//     // index++;
// });
// console.log(newArray);


pets = pets.map((pet) =>{
    // let first = pet.charAt(0).toUpperCase();
    // let rest = pet.slice(1);
    // let capitalized = first + rest;
    return pet.charAt(0).toUpperCase() + pet.slice(1);
    
});
console.log(pets);