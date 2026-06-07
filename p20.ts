//1. 기본 프로미스 만들기 -1초 뒤에 숫자 42를 돌려주는 약속
function getNumber(): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(42);
        },1000);
    });
}

//.then()으로 성공 결과 받기
getNumber().then((value)=>{
    console.log(value);
});

//2. 성공과 실패가 모두 가능한 Promise:resolve, rejected 사용
function divide(a:number, b:number): Promise<number>{
    return new Promise((resolve, reject)=>{
        if(b===0){
            reject(new Error("0으로 나눌 수 없다"));
        } else {resolve(a/b);}
    });
}

//.then()으로 성공, .catch()로 실패를 각각 처리
divide(10,2)
    .then((result)=>console.log(`결과:${result}`))
    .catch((err)=> console.log(`에러:${err.message}`));
divide(10,0)
    .then((result)=>console.log(`결과:${result}`))
    .catch((err)=> console.log(`에러:${err.message}`));

//3. .then() 체이닝 -결과 이어서 가공
getNumber()
    .then((n)=> n+10)
    .then((n)=>n*2)
    .then((final)=>console.log(final));