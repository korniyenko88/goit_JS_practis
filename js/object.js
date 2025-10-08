const numbers = {
    first: '1',
    second: '2',
    therd: '3'
};

console.log('object: ', numbers);

let total = 0;

for (const key in numbers) {
    // console.log(`${key} : ${numbers[key]}`)

    total += +numbers[key];
   
}
 console.log(total);