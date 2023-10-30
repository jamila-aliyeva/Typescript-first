// masala-1

// function getSum(n: number): number {
//   let num1 = 0;
//   let num2 = 0;
//   for (let i = 1; i <= n; i++) {
//     num1 += 2 * i - 1;
//     num2 += 2 * i;
//   }
//   return num1 * num2;
// }

// let n = 3;
// console.log(getSum(n));

// masala-2

// function getHighestNumberOfDigits(arr: number[]): number {
//   let maxNum = 0;
//   let minNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const  continue....
//   }
// }

// masala-3

// function getStringArr(arr: any[]): string[] {
//   const result: string[] = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];
// console.log(getStringArr(arr));

// masala-4

// function getPunctuationNumber(str: string): number {
//   const punctuationSigns: string[] = [
//     "!",
//     '"',
//     "#",
//     "$",
//     "%",
//     "&",
//     "'",
//     "(",
//     ")",
//     "*",
//     "+",
//     ",",
//     "-",
//     ".",
//     "/",
//     ":",
//     ";",
//     "<",
//     "=",
//     ">",
//     "?",
//     "@",
//     "[",
//     "\\",
//     "]",
//     "^",
//     "_",
//     "`",
//     "{",
//     "|",
//     "}",
//     "~",
//     "'",
//   ];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (punctuationSigns.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// const str = "Hello! How are you? I'm doing great. What's new?";
// console.log(getPunctuationNumber(str));

// masala-5

// function switchLetters(str: string): string {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const lowerCaseChar = char.toLowerCase();
//     const switchedChar =
//       lowerCaseChar === char ? char.toUpperCase() : lowerCaseChar;
//     result += switchedChar;
//   }

//   return result;
// }

// const str = "Abdulaziz Programmer";
// const result = switchLetters(str);
// console.log(result);

// masala-6

// function changeObjToArr(obj: { [key: string]: number }): string[] {
//   const result: string[] = [];

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];
//       const keyValue = key + value;
//       result.push(keyValue);
//     }
//   }

//   return result;
// }

// const obj = { a: 1, b: 2, c: 3 };
// console.log(changeObjToArr(obj));

// masal-7

// interface SeparatedStudents {
//   grant: string[];
//   contract: string[];
// }

// function separateStudents(
//   students: { name: string; isGrant: boolean }[]
// ): SeparatedStudents {
//   const result: SeparatedStudents = {
//     grant: [],
//     contract: [],
//   };

//   for (const student of students) {
//     if (student.isGrant) {
//       result.grant.push(student.name);
//     } else {
//       result.contract.push(student.name);
//     }
//   }

//   return result;
// }

// const students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];

// console.log(separateStudents(students));

// masala-8

// interface Book {
//   name: string;
//   pages: number;
//   isReadFinished: boolean;
// }

// function getTotalPages(books: Book[]): number {
//   let totalPages = 0;

//   for (const book of books) {
//     if (book.isReadFinished) {
//       totalPages += book.pages;
//     }
//   }

//   return totalPages;
// }

// const books = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true },
// ];

// console.log(getTotalPages(books));

// masala9

// ...

// masala10

// function Student(firstName, lastName, university, course, totalYears, isGrant) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.university = university;
//   this.course = course;
//   this.totalYears = totalYears;
//   this.isGrant = isGrant;
// }

// Student.prototype.getInfo = function () {
//   let grantStatus = this.isGrant
//     ? "grant asosida o'qiydi"
//     : "stipendiyasiz o'qiydi";
//   let yearMessage =
//     this.totalYears === 1
//       ? "1 yildan keyin"
//       : this.totalYears + " yildan keyin";

//   return `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantStatus}. ${yearMessage} universitetdan qutuladi.`;
// };

// let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);

// console.log(student.getInfo());

// masala-1.1

// function getSum(n: number): number {
//   let number = 0;
//   for (let i = 0; i <= n; i++) {
//     number += i ** (i % 2 || 2);
//   }
//   return number;
// }
// let n = 5;

// console.log(getSum(n));

// masala-1.2

// function getLongestWord(arr: string[]): string {
//   let longWord = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longWord.length) {
//       longWord = arr[i];
//     }
//   }
//   return longWord;
// }

// let arr = ["Abdulaziz", "Murod", "Yulduz", "Abdug'affor", "Jamila"];
// console.log(getLongestWord(arr));

// masala-1.3

// function getDelevery(arr: number[], n: number): number[] {
//   let devery: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % n === 0) {
//       devery.push(arr[i]);
//     }
//   }
//   return devery;
// }
// const arr: number[] = [2, 5, 7, 10, 0, 18, 15];
// const n: number = 5;

// console.log(getDelevery(arr, n));

// masala-1.4

// function checkWordCapitalize(str: string): string {
//   const words: string[] = str.split(" ");
//   return words.every((word) => {
//     const firstLetter = word.charAt(0);
//     return firstLetter === firstLetter.toUpperCase();
//   });
// }

// let str = "Abdulaziz Programmer Is FullStack Developer";

// console.log(checkWordCapitalize(str));    have error, i guess

// masala-1.5

// function getCharCountObj(str: string) {
//   return [...str].reduce((charCount, char) => {
//     if (charCount.hasOwnProperty(char)) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//     return charCount;
//   }, {});
// }

// let str = "Abdulaziz Programmer";
// console.log(getCharCountObj(str));

// masala-1.6

// ------

// masala-1.7

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// function deleteProducts(...ids: number[]): Product[] {
//   for (let i = products.length - 1; i >= 0; i--) {
//     if (ids.includes(products[i].id)) {
//       products.splice(i, 1);
//     }
//   }
//   return products;
// }

// const products: Product[] = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// deleteProducts(4, 6, 9);

// masala-1.8

// ------

// masala-1.9

// declare global {
//   interface String {
//     count(char: string): number;
//   }
// }

// String.prototype.count = function (char: string): number {
//   let count = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this.charAt(i).toLowerCase() === char.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// };

// let str = "Abdulaziz Programmer";
// let char = "a";
// const result = str.count(char);
// console.log(result);

// masala-1.10

// class Employee {
//   firstName: string;
//   lastName: string;
//   workPlace: string;
//   salary: number;
//   percent: number;
//   isFullTime: boolean;

//   constructor(
//     firstName: string,
//     lastName: string,
//     workPlace: string,
//     salary: number,
//     percent: number,
//     isFullTime: boolean
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.workPlace = workPlace;
//     this.salary = salary;
//     this.percent = percent;
//     this.isFullTime = isFullTime;
//   }

//   getInfo(): string {
//     const type = this.isFullTime ? "full-time" : "part-time";
//     const salaryIncrease = (this.salary * this.percent) / 100;
//     const totalSalary = this.salary + salaryIncrease;
//     return `${this.firstName} ${this.lastName} ${this.workPlace}da ${totalSalary}$ oylik evaziga ${type} ishlaydi.`;
//   }
// }

// let emp1 = new Employee(
//   "Abdulaziz",
//   "Programmer",
//   "Najot ta'lim",
//   10000,
//   20,
//   false
// );
// let emp2 = new Employee(
//   "Abdulaziz",
//   "Programmer",
//   "Najot ta'lim",
//   5000,
//   40,
//   true
// );
// console.log(emp1.getInfo());
// console.log(emp2.getInfo());
