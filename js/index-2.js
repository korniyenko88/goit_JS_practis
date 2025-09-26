// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + "...";
//   }
// }
// console.log(formatMessage("Curabitur ligula sapien", 50));

// function getShippingCost(country) {
//   switch (country) {
//     case "China": {
//       return `Shipping to ${country} will cost 100 credits`;
//     }

//     case "Chile": {
//      return `Shipping to ${country} will cost 250 credits`;
//       }
//       case 'Australia': {
//         return  `Shipping to ${country} will cost 170 credits`;
//           }
//   }
// }
// console.log(getShippingCost("Australia"));

const pets = ["dog", "cat", "maus", "elefand", "parrot"];
const numbers = ["1", "2", "3", "4", "5"];

const patsNumbers = pets.concat(numbers);

console.log("pats and numbers", patsNumbers);
console.log(pets);
console.log(numbers);

for (let i = 0; i < pets.length; i++) {
  console.log("pets: ", pets[i]);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const pet of pets) {
  console.log("pet list: ", pet);
}

async function printNumbersWithDelay(numbers) {
  for (const number of numbers) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(number); //  Вивід числа з затримкою
  }
}

async function printNumbersWithDelay() {
  for (const number of numbers) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(number); //  Вивід числа з затримкою
  }
}

printNumbersWithDelay()
  
  .catch((error) => {
    console.error("Error during printing:", error);
  });