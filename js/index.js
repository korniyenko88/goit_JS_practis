// 1. Модуль 1. Змінні та типи. Основи функцій

// function makeTransaction (quantity, pricePerDroid) {
//     const priceAllDroids = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${priceAllDroids}`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// function getShippingMessage (country, price, deliveryFee) {
// const totalPrice = price + deliveryFee;
// return `Shiping to ${country} will cost ${totalPrice} credits`
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//Модуль 2. Розгалуження і цикли

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     if (totalPrice > customerCredits) {
//         return "Insufficient funds!";
//     } else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     }

// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"


// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//       return message;
//     } else {
//       return message.slice(0, maxLength) + "...";
//     }
//   }


// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


// function checkForSpam(message) {
//     const bennedWords = ['spam', 'sale'];
//     const messageLowerCase = message.toLowerCase();
//     for (let i = 0; i < bennedWords.length; i++) {
//         if (messageLowerCase.includes(bennedWords[i])){
//             return true;
//         } else {
//             return false;
//         }

//     }

// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// function getShippingCost(country) {
//     switch (country) {
//       case 'China':
//         return `Shipping to ${country} will cost 100 credits`;
//       case 'Chile':
//         return `Shipping to ${country} will cost 250 credits`;
//       case 'Australia':
//         return `Shipping to ${country} will cost 170 credits`;
//       case 'Jamaica':
//         return `Shipping to ${country} will cost 120 credits`;
//       default:
//         return 'Sorry, there is no delivery to your country';
//     }
//   }

//   console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"




// 3. Mодуль 3. Масиви і функції

// function slugify(title) {
//     return title
//       .toLowerCase() // Convert to lowercase
//       .replace(/\s+/g, '-') // Replace spaces with hyphens
//       .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters
//   }

//   console.log(slugify("Hello World")); // Output: "hello-world"
//   console.log(slugify("This is a test title")); // Output: "this-is-a-test-title"
//   console.log(slugify("   Foo Bar   ")); // Output: "foo-bar"
//   console.log(slugify("Hello! World")); // Output: "hello-world"
//   console.log(slugify(" FooBar BazQux")); // Output: "foobar-bazqux"


