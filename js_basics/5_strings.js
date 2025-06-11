const name = "shobham"
const repocount = 50
//console.log(name + repocount + "value")
console.log(`hello my name is ${name} and my repo cnt is ${repocount}`)

const gamename = new String('skinsane')

console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.toLowerCase())

console.loh(gamename.charAt(2))
// gives the character at that index

console.log(gamename.indexOf('i'))
// prints the index of the letter

const  newstr = gamename.substring(0,4)
// gives output skin

const anotherstr = gamename.slice(0,4)

const newstr1 = "   nikhil   "
console.log(newstr1.trim())
// remove extra spaces in the string

const url = "https://sk.com/shobham%20kishan"
console.log(url.replace('%20','-'))

