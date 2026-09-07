function identity<T>(value: T): T{
    return value
} 

identity(20)  // TS figured it out that T -> number

//Explicit Generic
identity<number>(10) // you are manually specifying the type T-> number

//after substitution function behaves like: function identity(value: number): number


// Explicit typing is needed when inference fails