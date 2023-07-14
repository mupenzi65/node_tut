
const names=require("./1-names")
const sayHi=require("./2.utils")
const data=require(("./3.altModule"))

sayHi(names.john)
console.log(data)


const os=require('os')

// info about current user

const user=os.userInfo()
console.log(user)

// method returns the system uptim in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)


const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMOM:os.freemem(),
}

console.log(currentOS)