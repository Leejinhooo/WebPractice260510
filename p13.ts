class Animal {
    name : string;
    constructor(name: string){
        this.name = name;
    }
    eat(): void{
        console.log(`${this.name}이(가) 음식을 먹는다.`);
    }
}

class Dog extends Animal{
    bark(): void{
        console.log(`${this.name}: 멍멍`);
    }
}

class Employee extends Animal{
    job : string;
    constructor(name: string, job:string){
        super(name); //부모 클래스의 생성자 호출(필수)
        this.job = job;
    }
    introduce(): void{
        console.log(`저는 ${this.name}이고, 직업은 ${this.job}입니다.`);
    }
}

let myDog =new Dog("바둑이"); //자식 클래스가 부모 클래스에서 상속 받은거라서 자식이 더 많이 쓸 수 잇음
myDog.eat();
myDog.bark();
//ex
//let animal: Animal = myDog;
//animal.eat();
//animal.bark(); ->이건 안됨

let emp = new Employee("박민수", "개발자");
emp.eat();
emp.introduce();