const user = {
    username  : "shobham",
    prize : 654,

    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`)        
    }
}

user.welcomemsg()
user.username =  "sam"
user.welcomemsg()
//this will change the username and print the new welcome message 

function chai(){
    console.log(this)
}
chai() 


// ARROW  FUNCTIONS
()  => {}

const addtwo  = (num1, num2) => {
    return num1 + num2
}
//called explicit return
//when there are curly braces return is  needed  

const addthree =  (num1, num2, num2) => (num1 + num + num3)
//called implicit return
// when there is no curly braces just the funtion is binded to curved bracs then  mno need  to return

console,log(addtwo(3, 4))