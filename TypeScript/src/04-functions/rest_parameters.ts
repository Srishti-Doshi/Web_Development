// Rest parameters 
//Rest parameters allow a function to accept any number of arguments.

//...parameterName

function printNumbers(...nums: number[]):void{
    console.log(nums)
}

printNumbers(1,2,3)  // [1,2,3]





function sum(...numbers: number[]): number{
    return numbers.reduce((total, n)=> total + n, 0)
}
//reduce() is an array method that reduces the entire array to a single value.





// Rest parameter must be the last parameter.

function test(a: number, ...nums: number[]){

}

// function test1(...nums:number[], a:number){}  //error