// 1. Модуль 1. Змінні та типи. Основи функцій

//task-1.js

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
// Оголоси функцію makeTransaction, яка очікує два параметри,
// значення яких будуть задаватися під час її виклику:
//  • quantity— перший параметр, число, що містить кількість замовлених дроїдів
//  • pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
//  "You ordered <quantity> droids worth <totalPrice> credits!", де:
// • <quantity> — це кількість замовлених дроїдів
// • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// Вирішення

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
// task-1.js

// Станція з продажу ремонтних дроїдів готова до запуску,
// залишилося написати програмне забезпечення для відділу продажів.
// Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits),
// яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// -quantity — кількість замовлених дроїдів
// -pricePerDroid — ціна одного дроїда
// -customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:
// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів)
// і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
// функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок
// "You ordered <quantity> droids worth <totalPrice> credits!",
// де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

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

// Task 2

// Оголоси функцію formatMessage(message, maxLength),
// яка приймає рядок (параметр message)
// та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).
// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength,
// то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength,
// то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

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

// Task 3

// Функція checkForSpam(message) приймає рядок (параметр message),
// перевіряє його на вміст заборонених слів spam і sale,
// і повертає результат перевірки.
// Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
// Доповни код функції таким чином, що:
// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

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

// Tasak 4

// Оголоси функцію getShippingCost(country),
// яка повинна перевіряти можливість доставки товару в країну користувача (параметр country)
// і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
// де замість <country> і <price> необхідно підставити відповідні значення.
// Список країн і вартість доставки:
// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку,
// то функція повинна повернути рядок "Sorry, there is no delivery to your country".

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

// Task 1

// Задача 1. Генератор slug
// Виконуй це завдання у файлі task-1.js
// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті.
//  У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
// З цим розібралися? А тепер давай нарешті виконувати задачу!
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.

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

// Task 2

// Задача 2. Композиція масивів
// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив),
// secondArray (масив) і maxLength (число).
// Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// function makeArray(firstArray, secondArray, maxLength) {
//    const newArray = firstArray.concat(secondArray);
//    if (newArray.length > maxLength){
//     return newArray.slice(0, maxLength);
//    } else {
//     return newArray;
//    }

// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// Task 3

// Задача 3. Фільтрація масиву чисел
// Напиши функцію filterArray(numbers, value),
// яка приймає масив чисел (numbers) та значення (value) як параметри.
// Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.
// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// function filterArray(numbers, value) {
//     let newArray = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i]);
//         }
//     }
//     return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// 4. Mодуль 4. Об'єкти

// Task 1

// Задача 1. Пакування товарів
// Напиши функцію isEnoughCapacity(products, containerSize),
// яка обчислює, чи помістяться всі товари в контейнер при пакуванні.
// Функція оголошує два параметри:
// products — об’єкт, у якому ключі містять назви товарів,
// а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів,
// яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.
// Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

// function isEnoughCapacity(products, containerSize) {
//     let totalQuantity = 0;
//     for (const product in products) {
//       totalQuantity += products[product];
//     }
//     return totalQuantity <= containerSize;
//   }

// console.log(
//     isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
//   ); // true

//   console.log(
//     isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
//   ); // false

//   console.log(
//     isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
//   ); // true

//   console.log(
//     isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
//   ); // false

// Task 2

// Задача 2. Розрахунок калорій
// Напиши функцію calcAverageCalories(days),
// яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня.
// Функція очікує один параметр: days — масив об’єктів.
// Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.

// function calcAverageCalories(days){
//     if (days.length ===0) return 0;
// let totalCalories = 0;
// for (const day of days){
//     totalCalories += day.calories;
// }
// return totalCalories / days.length;
// }
// console.log(
//     calcAverageCalories([
//       { day: "monday", calories: 3010 },
//       { day: "tuesday", calories: 3200 },
//       { day: "wednesday", calories: 3120 },
//       { day: "thursday", calories: 2900 },
//       { day: "friday", calories: 3450 },
//       { day: "saturday", calories: 3280 },
//       { day: "sunday", calories: 3300 }
//     ])
//   ); // 3180

//   console.log(
//     calcAverageCalories([
//       { day: "monday", calories: 2040 },
//       { day: "tuesday", calories: 2270 },
//       { day: "wednesday", calories: 2420 },
//       { day: "thursday", calories: 1900 },
//       { day: "friday", calories: 2370 },
//       { day: "saturday", calories: 2280 },
//       { day: "sunday", calories: 2610 }
//     ])
//   ); // 2270

//   console.log(
//     calcAverageCalories([])
//   ); // 0

// const result = Number('123.123');

// const userInput = prompt('Put your ege');
// const mathUserInput = Number(userInput)
// console.log("user age:", mathUserInput);

// let userInput = prompt('Enter your age');
// const userInputToNumber = Number(userInput);
// if (typeof(userInputToNumber)=== "number") {
//   console.log("User age:",  userInputToNumber);
// } else {
//   console.log("Invalid params");
// }
// const value = 2;

// switch (value) {
//   case 1:
//     console.log("case 1");
//     break
//   case 2:
//     console.log('case 2');
//     break
//   case 3:
//     console.log("case 3");
// }

let firstName = prompt('Enter your name') || 'anonimous';

console.log(firstName);