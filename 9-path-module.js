// Build-in modules
// os = operating system
//  path
// FS =file system
// HTTP

const path = require('path')
console.log(path.sep);//The platform-specific file separator. '\' or '/'.

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
