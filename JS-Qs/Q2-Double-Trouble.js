/* 2. The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.*/

arr = [1,2,3,3,4,5,6,6];
doubles = [];

for (let i = 0; i < arr.length; i++) {
   if(arr[i-1] == arr [i]){
      doubles.push(arr[i]);
   }
   else{
      doubles.push(arr[i]*arr[i]);
   }
}

console.log(arr);

console.log(doubles);
