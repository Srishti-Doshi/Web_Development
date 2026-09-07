// Why Generics Are Better Than any

/*
any → lose type safety
generic → keep type safety
*/




//Generics become very useful with arrays.


/*
function firstElement<T>(arr: T[]): T{
    return arr[0]
}
*/
//WARNING: Type 'T | undefined' is not assignable to type 'T'

// firstElement([])

/*
arr = []
arr[0] = undefined
arr[0] -> T | undefined
*/


function firstElement<T>(arr : T[]): T | undefined{
    return arr[0]
}