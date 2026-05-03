let arr = [];
arr.push('abc'); // ['abc']
console.log(arr)
arr.push(123) // ['abc',123]
console.log(arr)
console.log(arr.shift())
console.log(arr)


let arr1 = [];
arr1.push(10);
arr1.push(20);
console.log(arr1[0]);
console.log(arr1[1]);


let arr2 =[1,2,3];
let [a,b] = arr;
console.log(a,b);