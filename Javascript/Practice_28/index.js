// Loops

// for loop
a = 0

for (let i = 0; i  < 11; i++) {
    console.log(a + i)
}

// forin loop
let obj = {
    name : "Srishti",
    role : "Student",
    course : "B.Tech"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

//forof loop
for (const c of "Srishti") {
    console.log(c)
}

//while loop
i = 1
while(i<6)
{
    console.log(i)
    i++;
}

//do while loop
n = 10
do {
    console.log(n)
} while (n<5);
