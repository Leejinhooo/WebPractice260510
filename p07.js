// for 문 예제
for (let i = 0; i < 5; i++) {
  console.log(`i의 값: ${i}`);
}

// while 문 예제
let j = 0;
while (j < 5) {
  console.log(`j의 값: ${j}`);
  j++;
}

// do...while 문 예제
let k = 0;
do {
  console.log(`k의 값: ${k}`);
  k++;
} while (k < 5);


// for...in 예제
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);  // a 1, b 2, c 3 출력
}

// for...of 예제
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(value);  // 10, 20, 30, 40, 50 출력
}

