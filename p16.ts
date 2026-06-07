function printValue(value : string | number): void {
    if (typeof value === "string") {
        console.log(`문자열이다: ${value.toUpperCase()}`);
    } else {
        console.log(`숫자이다:${value.toFixed(2)}`);
    }
}

printValue("hello");
printValue(3.14);

function isString(value :any):value is string{
    return typeof value === "string";
}

function process(input:string |number): void{
    if(isString(input)) {
        console.log(`문자열 길이:${input.length}`);
    } else {
        console.log(`숫자 두 배 : ${input *2}`);
    }
}

process("Hello");
process(10);