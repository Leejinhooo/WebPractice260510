function add(x:number, y:number):number{ //: 뒤에 number가 반한값의 타입
    return x+y;
}
console.log(add(3,5));

function greet(name: string): string{
    return `안녕하세요, ${name}님!`;
}
console.log(greet("철수"));

function printMessage(message: string): void{
    console.log(message);
}
printMessage("Hello!");

//화살표 함수로 더 간결하게 작성
const multiply = (x:number, y:number):number =>{
    return x*y;
};
console.log(multiply(4,5));

const square = (n:number):number => n* n;
console.log(square(7));
console.log(((n:number):number=>n*n)(8));