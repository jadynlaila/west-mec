

// people.reduce((total, current) => {
//     const {age} = current;

//     return ((total + current) / 1000);
// }, 0)

// console.log(total)

//current and person are interchangeable

console.log(
    people.reduce((total, person) => total + person.age, 0)/1000
) 