// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)
// this all will give boolean output 

// console.log("2">1)
// console.log("02">1)

console.log(null>0) //false
console.log(null==0) // false
console.log(null>=0) //true

// === this is called strict check
console.log("2" === 2)
//here it does not convert and compare


//create a function
const myfunction = function(){
    console.log("hello world")
}

//******************************* */
// STACK(primitive) , HEAP(non primitive)

let myname = "shobham kishan"
let anothername = myname
anothername = "nikhil"
console.log(myname)
console.log(anothername)

let userone = {
    email : "user@google.com",
    upi : "user@ybl"
}

let usertwo = userone
usertwo.email = "sk@google.com"

console.log(userone.email)
console.log(usertwo.email)
// tgis both gives same output as sk@google.com