// npm or modules or dependencies or package = contains js code
//npm - global command, comes with node
//npm --version

// local dependency - use it only in this particular project
//  npm i <packageName>

// global dependency - use it in any project
// npm install -g  <packageName>
// sudo npm install -g  <packageName> (for mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (Create package.json in the root , create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)


//  npm--version // 8.10.0
//  npm--v // 8.10.0
// npm i lodash
// npm i bootstrap

const _ = require('lodash');
const items = [1, [2, [3, 4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);//[ 1, 2, 3, 4 ]

// git init

    // start from  8hrs video of freeCodeCamp(1: 56: 04)







