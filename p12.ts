class Person {
    name:string; //속성(필드) 생성
    age:number;

    constructor(name:string, age:number) { //생성자:객체를 만들 때 자동으로 호출됨(일종의 함수)
        this.name = name; //this는 자기 자신을 가리킴
        this.age = age;
    }

    greet(): void{ //메서드
        console.log(`안녕하세요, 저는 ${this.name}이고 ${this.age}살 입니다.`);
    }
}

let person1 = new Person("김철수", 34); //new 키워드로 인스턴스 생성
let person2 = new Person("이영희", 23);
person1.greet();
person2.greet();