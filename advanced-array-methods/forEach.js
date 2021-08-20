
const drinkObj = {
    'Soda': 0,
    'Coffee': 0,
    'Lemonade': 0,
    'Iced tea': 0,
    'Juice': 0,
    'Milkshake': 0,
    'Water': 0,
    'Milk': 0,
    'Beer': 0,
    'Martini': 0,
    'Margarita': 0,
    'Wine': 0,
    'Daiquari': 0,
}


people.forEach((person) => {
    const {drink} = person;
    drinkObj[drink] ? 
        drinkObj[drink] +=1 :
        drinkObj[drink] = 1
});
// console.log(drinkObj);