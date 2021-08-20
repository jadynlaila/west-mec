let alcDrinks = [
    
    'Beer',
    'Martini',
    'Margarita',
    'Wine',
    'Daiquari',
]

let newPeople = people.map((person) => {
 const {age, drink} = person;
 //same as person.age and person.drink, destructuring just saves us from extra steps
//  if (age < 21 && drink == 'Beer' || 'Martini' || 'Margarita' || 'Wine' || 'Daiquari'){
    if (age < 21 && alcDrinks.includes(drink)){
     return {...person, ejected: true}
 }
 return {...person, ejected: false}
})



// console.log(newPeople);