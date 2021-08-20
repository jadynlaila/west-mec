let str = ["FFBFFFBLLL", "FBBBFBFRLL", "FBFBBFFRLR"];
let gridNums = [];
let rowArr = [];
let colArr = [];
input.forEach((word) => {
  stringSlice = word.split("");
  console.log(word, stringSlice);
  let heightMin = 0;
  let heightMax = 127;
  let widthMax = 7;
  let widthMin = 0;
  let gridNum = 0;
  stringSlice.forEach((letter, index) => {
    if (letter == "F") {
      let heightSplit = (heightMin + heightMax) / 2;
      //   console.log(heightSplit);
      heightMax = Math.floor(heightSplit);
      console.log(heightMax, heightMin, "F");
    }
    if (letter == "B") {
      let heightSplit = (heightMin + heightMax) / 2;
      //   console.log(heightSplit);
      heightMin = Math.ceil(heightSplit);
      console.log(heightMax, heightMin, "B");
    }
    if (letter == "L") {
      let widthSplit = (widthMin + widthMax) / 2;
      //   console.log(heightSplit);
      widthMax = Math.floor(widthSplit);
      console.log(widthMax, widthMin, "L");
    }
    if (letter == "R") {
      let widthSplit = (widthMin + widthMax) / 2;
      //   console.log(heightSplit);
      widthMin = Math.ceil(widthSplit);
      console.log(widthMax, widthMin, "R");
    }
    index++;
  });
  if ((index = 10)) {
    gridNum = heightMax * 8 + widthMax;
  }
  colArr.push(widthMax);
  rowArr.push(heightMax);

  gridNums.push(gridNum);
});
console.log(gridNums);







let answer = [];
let lowestSquare = 800;
let highestSquare = 0;
gridNums.forEach((num) => {
  if (num > highestSquare) {
    highestSquare = num;
  }
  if (num < lowestSquare) {
    lowestSquare = num;
  }
});
console.log(lowestSquare);
console.log(highestSquare);

let missingSquare;
for (let i = lowestSquare; i <= highestSquare; i++) {
  // gridNums.some((hole) => {
  //   return hole==i;
  // })
  if (gridNums.some((hole) => hole == i)) {
    continue;
  } else {
    missingSquare = i;
    console.log(i); //517
    break;
  }
}

let col = 0; //5
let row = 0; //64
while (missingSquare % 8 != 0) {
  col++;
  missingSquare--;
}
row = missingSquare / 8;

let heightMin = 0;
let heightMax = 127;
let widthMax = 7;
let widthMin = 0;
let codedHole = "";

while (heightMax != heightMin) {
  let middle = (heightMax + heightMin) / 2;
  if(row > middle){
    codedHole += "B";
    heightMin = Math.ceil(middle);
  }
  if(row < middle){
    codedHole += "F";
    heightMax = Math.floor(middle);
  }
}

while (widthMax != widthMin) {
  let middle = (widthMax + widthMin) / 2;
  if(col > middle){
    codedHole += "R";
    widthMin = Math.ceil(middle);
  }
  if(col < middle){
    codedHole += "L";
    widthMax = Math.floor(middle);
  }
}

console.log(codedHole);



let rowTotal = rowArr.reduce((total, row) => total + row, 0);
let colTotal = colArr.reduce((total, col) => total + col, 0);
console.log(rowTotal);
console.log((toString(rowTotal * colTotal).splice(0,5)));