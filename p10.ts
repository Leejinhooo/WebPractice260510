//유니온 타입(|)
let value: string | number;

value = "hello";
value = 100;
//value = true 이건 안됨

function printId(id:string | number): void{
    console.log(`ID:${id}`);
}

printId("abc123");
printId(456);

let mixed: string|number|boolean;
mixed = "안녕";
mixed = 42;
mixed = true;
console.log(mixed);