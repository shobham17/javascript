const isuserloggedin = true

if(2=="2"){
    console.log("executed");
}

//<  , > , <=   , >= , ==, !=, ===

const score = 200
if(score > 100){
    const  power = "fly"
    console.log(`user power : ${fly}`)
}

const balance = 1000
if(balance > 500){ console.log("test")}


const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true
if(userloggedin && debitcard){
    console.log("allow to buy the course")
}
if(loggedinfromemail || loggedinfromgoogle ){
    console.log("user logged in")
}

//*********SWITCH CASE********

const month = 3

switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    default:
        console.log("default no month ")
}


const useremail = "sk@sk.ai"

if (useremail){
    console.log("got user email")
}  else{
    console.log("dont have user email")
}

if(useremail.length === 0){
    console.log("array is empty")
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}

// BULLISH COALESCING OPERATIOR
let val1;
val1 = 5?? 10
val1 = null ?? 10
val1 = undefined ?? 15
// OR  can be
val1 = null ??  10 ??20

console.log(val1)

//TERNARY OPERATOR
//condition ? true : false

const iceteaprize = 100
iceteaprize <= 80? console.log("less than 80") : console.log("more than 80")
