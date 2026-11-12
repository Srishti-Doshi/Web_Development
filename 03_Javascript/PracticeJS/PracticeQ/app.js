// Q1 Write a JavaScript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

//elements larger than a number num
function getElements(arr, num)
{
   for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > num)
        {
            console.log(arr[i]);
        }
    } 
}

getElements(arr, num);   //8 9 10 6 7
console.log("");
getElements([1,2,3,4,5,6,7,8], 7);  // 8


// Q2. Write a JavaScript function to extract unique characters from a string.
let s = "aabbabcd";

//function to get String with all unique characters
function getUniqueChar(str)
{
    let ans = "";
    for(let i = 0; i < str.length; i++)
    {
        let currChar = str[i];
        
        if(ans.indexOf(currChar) == -1)
        {
            //if current char is not added, then add, else it is duplicate, no need to add.

            ans += currChar;
        }
    }
    return ans;
}

console.log(getUniqueChar(s));   //abcd
console.log(getUniqueChar("aaaa")); //a

// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”



// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

function longestName(country)
{
    let largest = "";
    for(let i = 0; i < country.length; i++)
    {
        if(country[i].length >= largest.length)
        {
            largest = country[i];
        }
    }

    return largest;
}

console.log(longestName(["Australia", "Germany", "United States of America"]));
console.log(longestName(["India", "UK", "USA"]));

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

let str1 = "athiest";

function countVowels(str)
{
    let count = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
            count++;
        }
    }
    return count;
}

console.log(countVowels(str1));  //3
console.log(countVowels("srishti")); //2
console.log(countVowels("sonu")); //2


// Qs5. Write a JavaScript function to generate a random number within a range (start, end)

function generateRandom(start, end)
{
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(1,5));
console.log(generateRandom(10,15));
console.log(generateRandom(100,150));