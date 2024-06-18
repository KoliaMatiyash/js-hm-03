const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];
const numbers = arr1.concat(arr2.concat(arr3));
let min_number = numbers[0];
for (const number of numbers) {
  if (min_number > number) {
    min_number = number;
  }
}
console.log(min_number);
