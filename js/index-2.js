// // // function formatMessage(message, maxLength) {
// // //   if (message.length <= maxLength) {
// // //     return message;
// // //   } else {
// // //     return message.slice(0, maxLength) + "...";
// // //   }
// // // }
// // // console.log(formatMessage("Curabitur ligula sapien", 50));

// // // function getShippingCost(country) {
// // //   switch (country) {
// // //     case "China": {
// // //       return `Shipping to ${country} will cost 100 credits`;
// // //     }

// // //     case "Chile": {
// // //      return `Shipping to ${country} will cost 250 credits`;
// // //       }
// // //       case 'Australia': {
// // //         return  `Shipping to ${country} will cost 170 credits`;
// // //           }
// // //   }
// // // }
// // // console.log(getShippingCost("Australia"));

// // // const pets = ["dog", "cat", "maus", "elefand", "parrot"];
// // // const numbers = ["1", "2", "3", "4", "5"];

// // // const value = '8 11';
// // // const arrValue = value.split(" ");

// // // console.log(typeof +arrValue[0])

// // // console.log(pets)

// // // for (let i = 0; i < numbers.length; i++) {
// // //     console.log (`${i}`)
// // //  };

// // // const patsNumbers = pets.concat(numbers);

// // // console.log("pats and numbers", patsNumbers);
// // // console.log(pets);
// // // console.log(numbers);

// // // for (let i = 0; i < pets.length; i++) {
// // //   console.log("pets: ", pets[i]);
// // // }

// // // for (let i = 0; i < numbers.length; i++) {
// // //   console.log(numbers[i]);
// // // }

// // // for (const pet of pets) {
// // //   console.log("pet list: ", pet);
// // // }

// // // async function printNumbersWithDelay() {
// // //   for (const number of numbers) {
// // //     await new Promise((resolve) => setTimeout(resolve, 2000));
// // //     console.log(number); //  Вивід числа з затримкою
// // //   }
// // // }

// // // async function printPetsWithDelay() {
// // //   for (const pet of pets) {
// // //     await new Promise((resolve) => setTimeout(resolve, 2000));
// // //     console.log(pet); //  Вивід числа з затримкою
// // //   }
// // // }

// // // printNumbersWithDelay()

// // //   .catch((error) => {
// // //     console.error("Error during printing:", error);
// // //   });

// // //   printPetsWithDelay().catch((error) => {
// // //     console.error("Error during printing:", error);
// // //   });

// // const foo = function () {
// //   console.log(arguments);
// //   console.log(arguments[3]);
// //   const arrArguments = arguments[3];
// //   console.log(arrArguments);
// //   arrArguments.push("2");
// //   console.log(arrArguments);
// //   console.log(arguments);
// //   const makeArray = Array.from(arguments);
// //   console.log(makeArray);
// //   makeArray.push("pets");
// //   console.log(makeArray);
// // };

// // foo(10, "12", true, ["1", "2"]);

// // function sumArg() {
// //   console.log(arguments);
// //   let total = 0;
// //   for (let i = 0; i < arguments.length; i++) {
// //     total += total + arguments[i];
// //   }
// //   return total;
// // }

// // console.log(sumArg(1, 2, 3, 4));

// // function calculateAverage() {
// //   console.log(arguments);

// //   let average = 0;

// //   for (let i = 0; i < arguments.length; i++) {
// //     average = average + arguments[i];
// //   }
// //   return average / arguments.length;
// // }

// // console.log(calculateAverage(1, 2, 3, 4));

// // const getRectArea = function (dimensions) {
// //   console.log(typeof dimensions);
// //   const arrDimensions = dimensions.split(",");
// //   console.log(arrDimensions);

// //   return +arrDimensions[0] * +arrDimensions[1];
// // };
// // console.log(getRectArea("8, 11"));

// // const numberItem = function logItems(items) {
// //   console.log(items);
// //   let counter = 0;
// //   for (let i = 0; i < items.length; i++) {
// //     counter++;
// //     console.log(`${counter} : ${items[i]}`);
// //   }
// // };

// // numberItem(["mango", "Poli", "Ajax"]);

// // const leter = function (leter) {
// //     console.log(leter.split(""));
// //     // if (leter === leter.toUpperCase()) {
// //     //     return 'to upper case'
// //     // } else {
// //     //     return 'lower case'
// //     // }
// //     // return leter === leter.toUpperCase() ? "upper case " : "lower case";

// //     const arrStr = leter.split("");
// //     console.log(arrStr);
// //     let newStr = '';

// //     for (const chengeStr of arrStr) {
// //         if (chengeStr === chengeStr.toLowerCase()) {
// //           newStr = newStr + chengeStr.toUpperCase();
// //         } else {
// //           if (chengeStr === chengeStr.toUpperCase()) {
// //             newStr = newStr + chengeStr.toLowerCase();
// //           }
// //         }

// //     }
// //     return newStr;
// // }
// // console.log(leter("BaDCg"));

// // const slugify = function (title) {
// //   const slug = title.toUpperCase().split(" ").join("-");

// //   return slug;
// // };
// // console.log(slugify("Arrays for beginners"));

// // function makeArray(firstArray, secondArray, maxLength) {
// //     console.log(firstArray);
// //     console.log(secondArray);

// //     const newArray = firstArray.concat(secondArray);
// //     if (newArray.length <= maxLength) {
// //         return newArray;
// //     } else {
// //         return newArray.slice(0 , maxLength)

// //     }
// // }

// // console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 5));
// // ["Mango", "Poly", "Houston", "Ajax"]

// // function filterArray(numbers, value) {
// //     const newArrey = [];
// //     for (const number of numbers) {
// //         if (number > value) {
// // newArrey.push(number)
// //         }

// //     }
// // return newArrey
// //     const filteredArray = numbers.filter(number => number > value)
// //     return filteredArray
// // }

// // console.log(filterArray([12, 24, 8, 41, 76], 20));

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// console.log(courses);

// function addCourse(course) {
//   if (courses.includes(course)) {
//     return console.log(`${course} all ready added to your curses!`);
//   }
//   courses.push(course);
// };

// function removeCourse(course) {
//   //  courses.filter(item => item !== course);
//   const index = courses.indexOf(course);
//   console.log(index);
//   if (index !== -1) {
//       courses.splice(index, 1);
//       console.log(`${course} removed`)
//   } else {
//     return console.log(`${course} all reddy removed!`);
//   }
// };

// addCourse("qwerty");
// addCourse("qwerty");
// removeCourse('qwerty')

// console.log(courses);
