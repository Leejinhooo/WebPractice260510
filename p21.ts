//1. 기본 
try {
    const num:number = parseInt("abc");
    if(isNaN(num)) { throw new Error("숫자가 아니다");}
    console.log(num);
} catch(err) {
    if (err instanceof Error) {
        console.log(`에러 발생:${err.message}`);
    }
}

//2. 성공 실패 모두 실행
function divide(a:number, b:number):number {
    try{if(b==0) throw new Error("0으로 나눌 수 없다");
    return a/b;
    } catch (err){
        if(err instanceof Error) console.log(`에러:${err.message}`);
        return 0;
    } finally {console.log("계산 종료");}
}

divide(10,2);
divide(10,0);