const myarr = [1,2,3,4,5,6,7 ]
const myheros = ["ironman", "hulk"]

const myarr2 = new Array(1,2,3,4)
console.log(myarr[0])

//ARRAY METHODS
myarr.push(6)
console.log(myarr)

myarr.pop()
console.log(myarr)

myarr.unshift(0)
console.log(myarr)

console.log(myarr.includes(9))
//returns true or false if present or not

const newarr = myarr.join()
console.log(myarr)
console.log(typeof newarr)

// SLICE AND SPLICE
console.log("A", myarr)
const myn1  = myarr.slice(1, 3)
console.log(myn1)
console.log("B", myarr)

const myn2 = myarr.splice(1,3)
console.log(myn2)

const mrvlhr = ["spiderman", "hulk", "thor"]
const dchr = ["superman", "flash", "batman"]
mrvlhr.push(dchr)
console.log(mrvlhr)
//givesoutput
//["spiderman", "hulk", "thor",["superman", "flash", "batman"]]


const allhr = mrvlhr.concat(dchr)
console.log(allhr)
//gives output
// ["spiderman", "hulk", "thor","superman", "flash", "batman"]


const allnewhr = [...mrvlhr, ...dchr]
console.log(allnewhr)

const anotherarr = [1,2,3,[4,5 ,6], 7,[6,7,[4,5]]]
const realanotherarr = anotherarr.flat(Infinity)
// gives out a single array which is spread out and there is no single array


//CONVERTING TO A ARRAY FROM  A STRING
console.log(Array.from("shobham"))

let score1 = 100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3))
//gives output [100,200,300]

//tocheck whether there is a array  or not 
console.log(Array.isArray("shobham"))

