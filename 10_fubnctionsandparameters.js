function saymyame(){
console.log("N")
console.loh("I")
console.log("K")
console.log("H")
console.log("I")
console.log("L")
}

function addtwonum(number1, number2){
    console.log(number1 + number2)
} 
const result = addtwonum(3,5)
console.log("result :", result)


function loginusername(username){
    return `$(username) just logged in `
}
console.log(loginusername("shobham"))
//if  there is no name passed in the function
console.log(loginusername())
//gives output "undefined just logged in"

function loginname(username){
    if(username == undefined){
        console.log("enter a username")
        return
    }
    return `$(username) just logged in `
}

//if there is a default username exist like
//loginname(username = "sk")
//this will print the default if no name is passed and if the name is passed then it will overwrite the name and print the function for it
