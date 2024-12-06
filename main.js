// ============================myNewFilter
var arr = ["salom", "alik", "xayr", "qachon"];

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

// ----------------------------------mynewmap
Array.prototype.myMap = function (num) {
  let nevarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      nevarr.push(arr[i]);
    }
  }
  return nevarr;
};
console.log(arr.myMap("xayr"));
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
