function details(name: string, age: number = 0, gender?:string){
   console.log(name)
}

details("sri")  // name = "sri", age= 0
details("pri", 2)  // name = "pri", age= 2
details("sonu", 2, "F")   // name = "sonu", age= 2, gender = "F"
details("monu", undefined ,"M") // name = "monu", age = 0, gender = "M"


/* When you call the function, arguments must still follow the order.

So the order is:

1️⃣ name (required)
2️⃣ age (optional because it has default 0)
3️⃣ gender (optional)

*/