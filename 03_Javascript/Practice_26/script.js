//Write a JavaScript program to store name, phone number and marks of a student using objects.

let student = {
    name: "Prince",
    "phone number": 567,
    marks: 100
}

console.log(student)

//Create a variable of type string and try to add a number to  it.
var str = "Sonu"
str = str + 1
console.log(str)

//Use typeof operator to find the datatype of the string in last Question.
console.log(typeof str)

// Create a const object in js. Can you change it to hold a number later. -> yes
const c = {
    x: 8
}
console.log(c)

c.x = "10"
console.log(c)

//Try to add a new key to the const object in last Q . Were you able to do it? -> Yes
c.num = "50"
console.log(c)

// Write a js program to create a word - meaning dictionary of 5 words.
const dict = {
    "Reprimand": "फटकार / डाँट / चेतावनी देना -> express strong disapproval",
    "Bickering": "तुच्छ बातों पर झगड़ना / नोक-झोंक करना -> Arguingabout petty or unimportant matters",
    "Circumvent": "टालना / बच निकलना / चालाकी से निपटना -> o find a way around an obstacle, rule, or problem — often by using cleverness or indirect methods instead of facing it directly.",
    "Swayed" : "प्रभावित हुआ / डगमगाया / झूला ->  influence someone’s opinion, decision, or emotions.",
    "Frivolous": "तुच्छ / महत्वहीन / हल्का-फुल्का -> silly, unimportant"
}
console.log(dict)