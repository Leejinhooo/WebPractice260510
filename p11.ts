//인터섹션
type HasName = {name: string}; //->여기선 type을 interface로 바뀌도 됨
type HasAge = {age:number};
type Employee = HasName &HasAge; //->근데 여기션 interface 못씀
let emp:Employee = {
    name:"a",
    age:30
};
console.log(emp);

//조금 더 복잡한 방식
type Person = {name:string; age:number};
type Worker = {company:string;position:string};
type Developer = Person & Worker;
let dev:Developer={ //C언어의 var랑 기능은 같음. ts에도 옛날에는 var를 썼음
    name:"b",
    age:28,
    company:"Abc",
    position:"프론트엔드"
};
console.log(dev);