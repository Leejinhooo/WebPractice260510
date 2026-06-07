//어떤 타입이든 받아서 그대로 반환하는 함수
//T는 어떤 "타입 변수"로, 사용할 때 실제 타입이 정해짐
function identity<T>(value: T): T{
    return value;
}
let result1 = identity<string>("Hello");
let result2 = identity<number>(42);
let result3 = identity<boolean>(true);

console.log(result1, result2, result3);

function getFirst<T>(arr: T[]): T|undefined{
    return arr[0];
}
let firstNumber = getFirst<number>([1,2,3]);
let firstString = getFirst<string>(["a", "b"])

let firstBool = getFirst([true, false]);
console.log(firstNumber, firstString, firstBool)