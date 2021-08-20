


let kaines = people.filter((person) =>{
    const {name} = person;
    //my way.... or 
    // let firstName = name.split(" ")[0];
    // return firstName == 'Kaine';

    return name.startsWith("Kaine");
})

console.log(kaines);