const score = 400

const balance = new Number(100)
console.log(balance)

console.log(balance.toString(),length)
console.log(balance.toFixed(2))//gives precision value to 2 digits 
//outout  100.00

const  othernumber  =  23.3233

console.log(othernumber.toPrecision(3))
//output  124 rounds off the number

const hundreds = 1000000
console.log(hundreds.toLocaleString())
// gives output 1,000,000

//***********MATHS************** */

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(2,3,4,5))
console.log(Math.max(2,3,4,5))


console.log(Math.random())// gives value between 0 and 1

const min = 10
const max  = 20
console.log(Math.floor(Math.random()*(max-min+1)))

