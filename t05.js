const processArray = (arr) => {
  const [a, b] = arr;

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  console.log(`앞의 값: ${a} ${b}`);
  console.log(`총합: ${sum}`);
};

processArray([10, 20, 30, 40]);