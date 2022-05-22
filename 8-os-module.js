// Build-in modules
// os = operating system
//  path
// FS =file system
// HTTP

const os = require('os'); //build-in

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs =
{
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOs);
