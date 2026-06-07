function delay(ms: number):Promise<string>{
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(`${ms}ms 후 작업 완료`);
        }, ms);
    });
}

//async 함수 안에서만 await 사용 가능
async function fetchData():Promise<void>{
    console.log("데이터 가져오는 중...");
    const result = await delay(2000);
    console.log(result);
    console.log("작업 끝");
}

fetchData();

//여러 비동기 작업을 순차적으로 시행
async function multipleSteps(): Promise<void>{
    console.log("1단계 시작");
    await delay(100);
    console.log("1단계 완료");
    console.log("2단계 시작");
    await delay(100);
    console.log("2단계 완료");
    console.log("dhksfy");
}
multipleSteps();