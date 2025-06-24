
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("1. Sum of numbers:", sum);


let cities = ["Lahore", "Karachi", "Islamabad"];
cities.push("Peshawar", "Quetta");
console.log("2. Updated cities:", cities);


let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.pop();
console.log("3. Fruits after pop:", fruits);


let arr = [5, 10, 15, 20];
arr.shift();
console.log("4. After shift:", arr);


let languages = ["Java", "Python", "C++"];
languages.unshift("JavaScript");
console.log("5. Updated languages:", languages);


let nums = [5, 10, 15, 20, 25];
let userNum = Number(prompt("6. Enter a number to check:"));
if (nums.includes(userNum)) {
  console.log("6. Number exists in array");
} else {
  console.log("6. Number not found");
}


let fruitList = ["Apple", "Banana", "Mango", "Orange"];
console.log("7. Index of banana:", fruitList.indexOf("Banana"));


let evenIndexArray = [2, 4, 6, 8, 10, 12];
console.log("8. Numbers at even indexes:");
for (let i = 0; i < evenIndexArray.length; i++) {
  if (i % 2 === 0) {
    console.log(evenIndexArray[i]);
  }
}


let alphabets = ["A", "B", "C", "D", "E"];
let sliced = alphabets.slice(0, 3);
console.log("9. First 3 letters:", sliced);


let students = ["Ali", "Ahmed", "Sara", "Zain", "Amna"];
students.splice(1, 2);
console.log("10. Updated students:", students);


let nums2 = [12, 55, 8, 90, 27, 33];
let i = 0;
let largest = nums2[0];
while (i < nums2.length) {
  if (nums2[i] > largest) {
    largest = nums2[i];
  }
  i++;
}
console.log("11. Largest number:", largest);


let animals = ["Cat", "Dog", "Elephant", "Lion", "Ant"];
console.log("12. Animals with 'a':");
for (let i = 0; i < animals.length; i++) {
  if (animals[i].toLowerCase().includes("a")) {
    console.log(animals[i]);
  }
}


let colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1, 2, "Purple", "Pink");
console.log("13. Updated colors:", colors);


console.log("14. Odd numbers from 1 to 20:");
let n = 1;
do {
  if (n % 2 !== 0) {
    console.log(n);
  }
  n++;
} while (n <= 20);


let brands = ["Samsung", "Oppo", "Xiaomi"];
brands.push("iPhone");
brands.unshift("Nokia");
console.log("15. Final mobile brands:", brands);


let tenNums = [90, 101, 150, 50, 30, 200, 10, 99, 300, 105];
let count = 0;
for (let i = 0; i < tenNums.length; i++) {
  if (tenNums[i] > 100) {
    count++;
  }
}
console.log("16. Numbers > 100:", count);


let names = ["Ali", "Sara", "Ahmed", "Zoya"];
let userName = prompt("17. Enter a name:");
if (names.includes(userName)) {
  console.log("17. Name exists in array");
} else {
  console.log("17. Name not found");
}


let fiveNums = [2, 7, 4, 9, 10];
let even = 0;
let odd = 0;
for (let i = 0; i < fiveNums.length; i++) {
  if (fiveNums[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
console.log("18. Even:", even, "Odd:", odd);


let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let midWeek = week.slice(2, 6);
console.log("19. Tuesday to Friday:", midWeek);


let nums3 = [10, 20, 30, 40, 50];
let middleIndex = Math.floor(nums3.length / 2); 
nums3.splice(middleIndex, 1, 999);
console.log("20. After replacing middle element:", nums3);
