class Person {
    name: string = ""  //required
    age?: number    //optional
}

/*
For class properties, TypeScript checks that each property is either:

1️⃣ initialized
2️⃣ optional
3️⃣ assigned in constructor

If none of these happen → TypeScript warns.
*/


class Student {
    name: string  //required
    age?: number    //optional

    constructor(name: string, age: number)
    {
        this. name = name
    }
}
