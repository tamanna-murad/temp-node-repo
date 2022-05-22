// Modules = Encapsulated code (only share minimum)
// commonJS, every file is module (by default)
const names = require('./4-names');
// console.log(names);//{ john: 'john', peter: 'peter' }
const sayHi = require('./5-utilites');
const data = require('./6-alternative-flavor');
// console.log(data);
require('./7-mind-grenade');
// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);




