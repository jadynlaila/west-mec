
const fs = require('fs');
const str = fs.readFileSync('./jenkins.txt', 'utf8');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//PROBLEM 1
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
const re = /\@([A-Za-z]+)/g
let list = re.exec(str);
let locationString = '';
let spaces = '';

while(list){
    let item = list[1]
    console.log(`${item}`);
    list = re.exec(str);
    locationString = locationString + item;
    spaces = locationString.match(/.{1,18}/g)
}

let solution = spaces.join(' ')
console.log(solution);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//PROBLEM 2
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
let lat = '';
let long = '';
let latLongArr = [];

let reDegree = /([0-9])[a-zA-Z]{3,}([0-9])[a-zA-Z]{3,}([0-9])[a-zA-Z]{3,}([°])/g
let degree = reDegree.exec(str);
// let degreeSolve = degree[1] + degree[2] + degree[3] + degree[4];
while(degree){
    let degreeTemp = degree[1] + degree[2] + degree[3];
    degreeTemp = Number(degreeTemp);
    if(degreeTemp < 255 && degreeTemp !== 000){
        console.log(degreeTemp);
        latLongArr.push(degreeTemp + degree[4]);
    }
    degree = reDegree.exec(str);
}

let reQuote = /([0-9])[a-zA-Z]{3,}([0-9])[a-zA-Z]{3,}(['])/g
let quote = reQuote.exec(str);
while(quote){
    let quoteTemp = quote[1] + quote[2];
    quoteTemp = Number(quoteTemp);
    if(quoteTemp < 63 && quoteTemp !== 00){
        console.log(quoteTemp);
        latLongArr.push(quoteTemp + quote[3]);
    }
    quote = reQuote.exec(str);
}

let reDot = /([0-9])[a-zA-Z]{3,}([0-9])[a-zA-Z]{3,}([.])/g
let dot = reDot.exec(str);
while(dot){
    let dotTemp = dot[1] + dot[2];
    dotTemp = Number(dotTemp);
    if(dotTemp < 63 && dotTemp !== 00){
        console.log(dotTemp);
        latLongArr.push(dotTemp + dot[3]);
    }
    dot = reDot.exec(str)
}

let reDubQuote = /([0-9])[a-zA-Z]{3,}(["])[a-z]{3,}([A-Z])/g
let dubQuote = reDubQuote.exec(str);
while(dubQuote){
    let dubQuoteTemp = dubQuote[1];
    dubQuoteTemp = Number(dubQuoteTemp);
    if(dubQuoteTemp < 7 && dubQuoteTemp !== 0){
        console.log(dubQuoteTemp);
        dubQuoteTemp = dubQuoteTemp.toString();
        latLongArr.push(dubQuoteTemp + dubQuote[2] + dubQuote[3]);
    }
    dubQuote = reDubQuote.exec(str);
}



console.log(latLongArr);
let latArray = [];
let longArray = [];

for (let i = 0; i < latLongArr.length; i++ ){
    console.log(latLongArr[i]);
    if(i % 2 == 0){
        long = long + latLongArr[i];
        longArray.push(latLongArr[i]);
    }
    else{
        lat = lat + latLongArr[i]
        latArray.push(latLongArr[i]);
    }
}

console.log(latArray, longArray);
console.log(long);
console.log(lat);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//PROBLEM 2
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`


let reBefore = /( [a-zA-Z]{1,7}\.?)\]/g;
let before = reBefore.exec(str);
while(before){
    console.log(before[1]);
    before = reBefore.exec(str);
}

let reAfter = /\[([a-zA-Z]{1,7})\.?/g;
let after = reAfter.exec(str);
while(after){
    console.log(after[1]);
    after = reAfter.exec(str);
}
//^[!]


