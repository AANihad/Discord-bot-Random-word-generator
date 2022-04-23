// const A = ["January", "February", "March", "April", "May", "June", "July"];
// const B = ["Potato", "Tomato", "grill", "fish", "log", "book", "cup"];
// const C = ["plumber", "lap", "underwater"];

// randomA = Math.floor(Math.random() * A.length);
// randomB = Math.floor(Math.random() * B.length);
// randomC = Math.floor(Math.random() * C.length);
// console.log(A[randomA],"-",B[randomB],"-",C[randomC]);



var randomWords = require('random-words');
console.log(randomWords({ exactly: 3, join: '-' }))