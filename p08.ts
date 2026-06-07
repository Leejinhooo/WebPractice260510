interface User{
    name: string;
    age:number;
    email:string;
    nickname?:string; //?는 선택적 사항
}
let user1:User={
    name : "김철수",
    age:25,
    email:"ellie@gamil.com"
};
let user2:User ={
    name:"이영희",
    age:30,
    nickname:"영영",
    email:"@dudgml@naver.com"
};
function printUser(user:User):void{
    console.log(`이름:${user.name}, 나이:${user.age}, 닉네임:${user.nickname}`);
}
printUser(user1)