//null
let nickname:string |null=null;
nickname = "철수";
nickname = null;

//undefined
let middleName: string | undefined;
middleName = "James";
middleName = undefined;

let value: string|null|undefined; //다 됨
value = "안녕";
value = null;
value = undefined;

function printName(name: string | null): void {
    if (name===null){
        console.log("이름이 없다");
    }
    else {
        console.log(`이름:${name.toUpperCase()}`);
    }
}

printName(null);
printName("alice");