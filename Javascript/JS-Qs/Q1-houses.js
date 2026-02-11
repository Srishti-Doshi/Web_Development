/* 1. The Magical Sorting Hat:
   Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.*/
   
let nameList = ["Srishti", "Prince", "Sonu", "Sahil", "Tiku", "Tinka", "Tinku", "Puuung", "Motu", "Shahjada"];
let Gryffindor = [];
let Hufflepuff = [];
let Ravenclaw = [];
let Slytherin = [];

function assign(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 6) {
            Gryffindor.push(arr[i]);
        }
        else if (arr[i].length < 8) {
            Hufflepuff.push(arr[i]);
        }
        else if (arr[i].length < 12) {
            Ravenclaw.push(arr[i]);
        }
        else {
            Slytherin.push(arr[i]);
        }
    }
}
assign(nameList);
console.log('Gryffindor: ',Gryffindor);
console.log('Hufflepuff: ',Hufflepuff);
console.log('Ravenclaw: ',Ravenclaw);
console.log('Slytherin: ',Slytherin);
