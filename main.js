// ============================myNewFilter
// var arr = ["salom", "alik", "xayr", "qachon"];

// Array.prototype.myFilter = function (num) {
//   var result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result += num;
//   }
//   return arr;
// };
// var myNewFilter = arr.myFilter("alik");
// console.log(myNewFilter);

// ----------------------------------mynewmap
// Array.prototype.myMap = function (callback) {
//   let nevarr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       nevarr.push(callback(this[i], i, this));
//     }
//   }
//   return nevarr;
// };
// let newestarr = myMap((value) => {
//   return value * value;
// });
// ===============================myevery
// Array.prototype.mynewevery = function (num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== num) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(arr.mynewevery("olma"));
// ==========================================mysome
// Array.prototype.mynewsome = function (num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.includes(num)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
// console.log(arr.mynewsome("olma"));
