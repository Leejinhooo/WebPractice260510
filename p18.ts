//비구조화 
const person = {name:"철수", age:25, city:"서울"}; //객체 비구조화

const {name, age, city} = person;
console.log(name, age, city);

const colors = ["빨강", "초록", "파랑"]; //배열 비구조화
const [first, second, third]=colors;
console.log(first, second, third);

function printPerson({name, age}:{name:string, age:number}):void{
    console.log(`${name}님은 ${age}살이다`);
}

printPerson(person);
const{name:onlyName}=person; //일부만 뽑는것도 가능
console.log(onlyName);