// Array Spreading
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Object Spreading
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3, d: 4 }

// แปลง string เป็น Array
const str = "hello";
const charArray = [...str]; // Output: ['h', 'e', 'l', 'l', 'o']

// การใช้ toUppercase
const lowercaseString = "hello";
const uppercaseString = lowercaseString.toUpperCase();

console.log(uppercaseString); // Output: "HELLO"

// การใช้ includes ใน Array
const array = [1, 2, 3, 4, 5];
// ตรวจสอบว่าค่า 3 อยู่ในอาร์เรย์หรือไม่
const isInArray = array.includes(3);

console.log(isInArray); // Output: true

//การใช้ includes ใน String
const str1 = "Hello, World!";

// ตรวจสอบว่าคำว่า "World" อยู่ในสตริงหรือไม่
const isInString = str.includes("World");

console.log(isInString); // Output: true


// การใช้ for loop + while loop
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // while loop
  let j = 0;
  while (j < 5) {
    console.log(j);
    j++;
  }
  