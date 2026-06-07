type Point = { //객체 타입에 별칭 붙이기. interface랑 비슷함. 그렇다면 둘 중 하나는 없어도 되는 거같은데 
               // 왜 두개나 있나 하면 유니온 타입 때문임
            //타입스크립트에선 type을 좀 더 쓰는 편(interface도 씀)
            //interface는 상속이 가능함
            //type은 그냥 새로운 무언가를 만들어내는거
    x:number;
    y:number;
};

let p1: Point ={x:10,y:20};
let p2: Point = {x:5,y:15};

type UserID = string; //단순 타입에도 별칭 붙일 수 있음
type Score = number;

let myId : UserID = "user_123";
let myScore: Score = 95;

console.log(p1, myId ,myScore);