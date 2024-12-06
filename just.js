// function sayHello(a, b) {
//   //   console.log("work function");
//   //   console.log(a + b);
// }
// setTimeout(sayHello, 1000, 5, 5);
// function sayHello(a, b) {
//   //   console.log("work function");
//   //   console.log(a + b);
// }
// setTimeout(sayHello, 3000, 5, 5);
// let time = setTimeout(() => {
//   //   console.log("hello set timeout");
//   sayHello(5, 10);
// }, 3000);
// clearTimeout(sayHello);
// let infoarr = [
//   {
// name: izzatillo,
//   },
// ];
// let arr = [1, 2, 3, 4, 5, 6];
// arr.push("7");
// arr.pop();
// arr.shift();
// arr.unshift(1);
// let newarr = arr.slice(1, 5);

// newarr = arr.splice(1, 4);
// arr.forEach((value, idx, arr) => {
// //   console.log(value, idx, arr);
// });
// let newarr = arr.map((value) => {
//   return value * value;
// });
// let filtr = infoarr.filter((value) => value % 2 !== 0);
// console.log(filtr);
// let users = [
//   {
//     id: 1,
//     username: "a",
//   },
//   {
//     id: 2,
//     username: "2",
//   },
//   {
//     id: 3,
//     username: "3",
//   },
// ];
// Array.prototype.myForEach = function (cb) {
//   let newarr = "";
//   for (i = 0; i < this.length; i++) {
//     cb(this[i], i);
//   }
// };
// users.myForEach((value, index, arr) => {
//   console.log(value, index, arr);
// });
// ========================================mynewmap
// Array.prototype.myMap = function (num) {
//   let nevarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       nevarr.push(arr[i]);
//     }
//   }
//   return nevarr;
// };
// console.log(arr.myMap("alik"));

// ============================myNewFilter

// Array.prototype.myFilter = function (num) {
//   var result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// var myNewFilter = arr.myFilter("alik");
// console.log(myNewFilter);

// Array.prototype.myMap = function (num) {
//   let nevarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       nevarr.push(arr[i]);
//     }
//   }
//   return nevarr;
// };
// console.log(arr.myMap("olma"));
Array.prototype.mynewsome = function (num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      return false;
    }
  }
  return true;
};
console.log(arr.mynewsome("olma"));
