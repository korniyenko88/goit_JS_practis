// const numbers = {
//     first: '1',
//     second: '2',
//     therd: '3'
// };

// console.log('object: ', numbers);

// let total = 0;

// for (const key in numbers) {
//     // console.log(`${key} : ${numbers[key]}`)

//     total += +numbers[key];

// }
// console.log(total);

// const keys = Object.keys(numbers)
// console.log(keys)

// let totalValue = 0;
// for (const key of keys) {
//     console.log(key)
//     totalValue += +numbers[key];
//     console.log(totalValue)
// }
// console.log(totalValue)

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// console.log("User: ", user);

// user.mood = "hapy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log(user);

// const userKeys = Object.keys(user);
// console.log(userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

// const obj = {
//   x: 2,
//   y: 3,
//   z: 4,
// };

// const keys = Object.keys(obj);
// console.log(keys);
// for (const key of keys) {
//   obj[key] = obj[key] ** 2;
// }

// console.log(obj);

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

const values = Object.values(salaries);
console.log(values);

for (const value of values) {
    sum += +value;
    
}
console.log('Total Salaries:', sum);


