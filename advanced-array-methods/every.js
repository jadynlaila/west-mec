
console.log(
    people.every((person) >= person.age >= 10 && person.age <= 25),
    people.every((person) >= person.age >= 15 && person.age <= 30),
    people.every((person) >= person.age >= 20 && person.age <= 35)
)