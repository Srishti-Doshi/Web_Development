/*
Type Guards

Type guards are safer than type assertions.
Instead of forcing a type, we check the type at runtime.
*/

function print(value: string | number){

    if(typeof value === "string"){
        console.log(value.toLowerCase())
    }
    
}

// Here typeof value === "string" acts as a type guard , Inside that block TypeScript knows: value → string