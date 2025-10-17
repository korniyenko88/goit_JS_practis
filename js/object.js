// // // const numbers = {
// // //     first: '1',
// // //     second: '2',
// // //     therd: '3'
// // // };

// // // console.log('object: ', numbers);

// // // let total = 0;

// // // for (const key in numbers) {
// // //     // console.log(`${key} : ${numbers[key]}`)

// // //     total += +numbers[key];

// // // }
// // // console.log(total);

// // // const keys = Object.keys(numbers)
// // // console.log(keys)

// // // let totalValue = 0;
// // // for (const key of keys) {
// // //     console.log(key)
// // //     totalValue += +numbers[key];
// // //     console.log(totalValue)
// // // }
// // // console.log(totalValue)

// // // const user = {
// // //   name: "Mango",
// // //   age: 20,
// // //   hobby: "html",
// // //   premium: true,
// // // };

// // // console.log("User: ", user);

// // // user.mood = "hapy";
// // // user.hobby = "skydiving";
// // // user.premium = false;

// // // console.log(user);

// // // const userKeys = Object.keys(user);
// // // console.log(userKeys);

// // // for (const key of userKeys) {
// // //   console.log(`${key}: ${user[key]}`);
// // // }

// // // const obj = {
// // //   x: 2,
// // //   y: 3,
// // //   z: 4,
// // // };

// // // const keys = Object.keys(obj);
// // // console.log(keys);
// // // for (const key of keys) {
// // //   obj[key] = obj[key] ** 2;
// // // }

// // // console.log(obj);

// // const salaries = {
// //   John: 100,
// //   Ann: 160,
// //   Pete: 130,
// // };

// // let sum = 0;

// // const values = Object.values(salaries);
// // console.log(values);

// // for (const value of values) {
// //     sum += +value;

// // }
// // console.log('Total Salaries:', sum);

// // const friends = [
// //   { name: "Mango", online: false },
// //   { name: "Kivi", online: true },
// //   { name: "Poly", online: true },
// //   { name: "Ajax", online: false },
// // ];

// // console.log("Obj:", friends);

// // function findFriendByName(allFriends, friendName) {
// //   for (const friend of allFriends) {
// //     if (friend.name.toLowerCase() === friendName.toLowerCase()) {
// //       return friend;
// //     }
// //   }
// //   return ` ${friendName.toUpperCase()} not found!`;
// // }

// // console.log(findFriendByName(friends, "kivi"));

// // function getAllNames (allFriends) {
// //     let frindsNames = [];
// //     for (const names of allFriends) {
// //         frindsNames.push(names.name);

// //     }
// //     return frindsNames;

// // }

// // console.log(getAllNames(friends));

// // function getOnlineFriends(allFriends) {
// //     let friendOnline = [];
// //     for (const friend of allFriends) {
// //         if (friend.online === true) {
// //             friendOnline.push(friend.name);
// //         }
// //     }
// //     return friendOnline;
// // }

// // console.log(getOnlineFriends(friends))

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Аконіт", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(allStones, stonesName) {
//   let totalPrice = 0;
//   for (const stone of allStones) {
//     if (stone.name.toLowerCase() === stonesName.toLowerCase()) {
//       totalPrice = stone.price * stone.quantity;
//     }
//   }
//   return `${totalPrice} ${stonesName}`;
// }

// console.log(calcTotalPrice(stones, "Діамант"));

// const playList = {
//   name: "qwerty",
//   rating: 6,
//   traks: ["trak-1", "trak-2", "trak-3"],
//   changeName(newName) {
//     this.name = newName;
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };

// console.log(playList);

// playList.changeName("some trak");
// playList.updateRating(2);
// console.log(playList);

// const temps = [18, 14, 12, 21, 17, 29, 24];

// const tempsCopy = [...temps]

// console.log(temps)
// console.log('copy:', tempsCopy)

// temps.push(20)
// console.log(temps);
// console.log("copy:", tempsCopy);

// const minTemp = Math.min(...temps)

// console.log(minTemp);

// function isEnoughCapacity(products, containerSize) {
//     let sumProducts = 0;
//     for (key in products) {
//         console.log(key)
//         console.log(products[key])
//         sumProducts += +products[key];;
//     }
//     console.log(sumProducts)

//     return sumProducts <= containerSize;
// //     const arrProducts = Object.values(products);
// //     let totalProducts = 0;
// //   for (const item of arrProducts) {
// //       totalProducts += +item;
// //     }
// //     console.log(totalProducts)
// //     return totalProducts <= containerSize

// }

// console.log(isEnoughCapacity({ apples: 5, grapes: 1, carrots: 1 }, 10)); // true

function calcAverageCalories(days) {
  console.log(days);

  let totalCalories = 0;
  for (const item of days) {
    totalCalories += +item.calories;
  }
  console.log(totalCalories);

  const averegeCalories = totalCalories / days.length;
  return averegeCalories;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime = hours;
  },
  getInfo() {
    return `${profile.username} has ${profile.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(320);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

getUserNames = (users) => {
    let newArray = [];
    
    newArray = users.map((user) => user.name );
    // for (const user of users) {
    //     console.log(user.name)
    //     newArray.push(user.name)
    // }
    return newArray
};

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
