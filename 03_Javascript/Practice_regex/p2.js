const text = "Twinkle Twinkle little star";
console.log(text.replace("Twinkle", "tinka"));
//output: tinka Twinkle little star
//only one occurence changed, to change all occurence we need to use regex


const text2 = "Twinkle Twinkle little star";
regex = /Twinkle/g;
console.log(text.replace(regex, "tinka"));
// Output:tinka tinka little star


//regex.com