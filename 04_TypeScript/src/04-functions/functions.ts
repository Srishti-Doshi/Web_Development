function abc(){

}

function abcd(): void{

}

function abcde(): string{
    return "hey"
}




function xyz(name: string , callback: (value: string)=>void){

}

xyz("sri", (value: string) => {
    console.log(value)
});




function xyza(name : string, age: number, cb: (argument: string)=> void){
    cb("hey");
}

xyza("tinka", 19, (arg: string) => {
    console.log(arg);
});



let list: number[] = [1,2,3,4,5,6];


const fltr = (item:number):boolean => {
    return item % 2 === 0;
};

let filteredListL:number[] = list.filter(fltr);



function fun(name: string, cb : (arg: string)=>void){
    cb("callback");
}

fun("sonu", (name: string)=> {
    console.log(name);
})