// function calculatecartprize(num1){
//     return num1
// }
console.log(calculatecartprize(2))
//if  we pass more than one value in the argument 

function calculatecartprize(...num1){
    return num1
}
console.log(calculatecartprize(200, 300, 400))
//gigves output as a array "[200, 300, 400]"


//using a object inside a function
const user = {
    username :  "shobham",
    prize  : 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and prize is ${anyobject.prize}`)
}
//now print it 
console.log(handleobject(user))
//if there are changes in the objects and is not as per the format required then it may return undefined

//or else the function can also bbe printed in this manner
handleobject({
    username : "shobham",
    prize  : 1299
})


//FOR ARRAYS
const mynewarray = [200, 300, 400, 500]

function returnsecvalue(getarray){
    return getarray[1]
}
console.log(returnsecvalue(mynewarray))