const obj = {
  name: "철수",
  age: 20,
  city: "서울"
};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}