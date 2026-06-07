//배열 합치기
const arr1: number[] = [1,2,3];
const arr2: number[] = [4,5,6];
const combined = [...arr1, ...arr2];
console.log(combined);

//배열 복사
const original = [10,20,30];
const originalCopy = original;
const copy = [...original];

original[0] = 9999;
console.log(original, originalCopy, copy)
//console.log(originalCopy)
//console.log(original);
//console.log(copy);

//객체 합치기/복사
const user = {name:"dudgml", age:25};
const job = {company: "ABCcompany", position:"개발자"};
const userInfo = {...user,...job};
console.log(userInfo);

//객체 일부 속성 변경하면서 복사
const updatedUser = {...user, age:25};
console.log(updatedUser);