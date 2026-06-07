//고차함수
//forEach
const fruits: string[] = ["사과", "바나나", "포도"];
fruits.forEach((fruits, index)=>{console.log(`${index+1}번째 과일:${fruits}`);});

//map
const numbers:number[] = [1,2,3,4,5,6];
const doubled:number[] = numbers.map((n)=>n*2); 
console.log(numbers);
console.log(doubled);

//filter-걸러내기
const scores: number[] = [85,34,56,16,100];
const passed:number[] = scores.filter((score)=>score>=60);
console.log(passed);

//reduce - 누적하기: 배열의 모든 요소를 하나의 값으로 합침
//형식: reduce((누적값,현재값)=>새로운 누적값,초깃값)
const numbers2: number[] = [1,2,3,4,5];
const sum: number = numbers2.reduce((acc,cur)=>acc+cur,0) //누적값 구하기
console.log(sum);

//const max: number=number3.reduce((acc,cur)=>(cur>acc?cur:acc), number3[0]);
//find : 조건에 맞는 첫 번째 요소를 반환(없으면 undefined)
const users =[
    {id:1, name:"철수"},
    {id:2, name:"영희"},
    {id:3, name:"민수"}
];
const found =users.find((user)=>user.id==2);
console.log(found);
const notFound=users.find((user)=>user.id==99);
console.log(notFound);
if(found){console.log(`찾은 이름:${found.name}`);} //안전하게 쓸려면 undefined 체크 필요

