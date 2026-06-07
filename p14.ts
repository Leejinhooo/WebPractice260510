//타입 단언(Type Assertion)
let someValue: any = "이것음 문자열이다";
let strLength1: number =(someValue as string).length; //방법1:as 키워드 사용(권장)
let strLength2:number=(<string>someValue).length; //2:<타입> 형식
console.log(strLength1, strLength2);