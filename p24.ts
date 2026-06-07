//some:하나라도 조건을 만족하면 true
//every:모두 조건을 만족해야 true
const scores: number[]=[85,63,98,40,45];
const hasFailed:boolean =scores.some((s)=>s<60);
console.log(hasFailed);
const allPassed:boolean=scores.every((s)=>s>=40);
console.log(allPassed);
const allPerfect: boolean = scores.every((s)=>s>=90);
console.log(allPerfect); //s가 85에서 끝남

//sort
const numbers:number[] = [30,5,100,1,50];
numbers.sort((a,b)=>a-b); //오름차순
console.log(numbers);
numbers.sort((a,b)=>b-a); //내림차순
console.log(numbers);

const users=[
    {age:30, name:"철수"},
    {age:21, name:"영희"},
    {age:14, name:"민수"}
];
users.sort((a,b)=>a.age-b.age);
console.log(users);

//고차함수 융합
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}
const products: Product[] = [
    { name: "노트북", price: 1500000, inStock: true },
    { name: "마우스", price: 30000, inStock: true },
    { name: "키보드", price: 80000, inStock: false },
    { name: "모니터", price: 400000, inStock: true },
    { name: "헤드폰", price: 150000, inStock: true }
];

const totalPrice:number = products
.filter((p)=>p.inStock)
.map((p)=>p.price)
.reduce((sum, price)=>sum+price,0);
console.log(totalPrice);

const sortedNames:string[]=products
.filter((p)=>p.inStock)
.sort((a,b)=>a.price-b.price)
.map((p)=>p.name);
console.log(sortedNames);
