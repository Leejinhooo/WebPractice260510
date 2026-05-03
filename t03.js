const arr = [10, 15, 20, 25, 30];

let sum = 0;

for (let num of arr) {
  if (num % 2 === 0) {
    console.log(num);
    sum += num;
  }
}

console.log(`합: ${sum}`);