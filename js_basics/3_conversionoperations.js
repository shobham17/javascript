let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueinnumber = Number(score)// converts the string value into number
console.log(typeof valueinnumber)

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let loggedin = 1;
let boollogged = Boolean(loggedin)
console.log(boollogged)

//if here the string is been used and if its empty then bool is false
//if anything is written in the string the returns true

// 1 => true; 0 => false;
// "" => false
// "shobham" => true

let somenum = 33
let somestr = string(somenum)
console.log(somestr)
console.log(typeof somestr)

//***************OPERATIONS************ */

let value = 3
let negvalue = -value
console.log(negvalue)

// basic mathematical functions
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = "shobham"
let str3 = str1 + str2
console.log(str3)
// this will concatenate the string

console.log("1"+2) // gives output 12
console.log(1+"2") // gives output 12
console.log("1"+2+2) // gives output 122 all cobnversion is in string

console.log(1+2+"2")
// this gives output 32

let gamecounter = 100
gamecounter++
console.log(gamecounter)