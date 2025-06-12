//SINGLETON

//OBJECT LITERALS
const mysym=  Symbol("key1")
const jsuser= {
    name : "shobham",
    [mysym]: "mykey1",
    age  : 19,
    location : "bilaspur",
    email : "sk@gmail.com",
    isloggedin : false,
    lastlogindays : ["monday",  "saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])

jsuser.email =  "nikhil@gmail.com"
//change email
Object.freeze(jsuser)


jsuser.greeting=function(){
    console.log("hello js user")
}
console.log(jsuser.greeting())

jsuser.greetingstwo = function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsuser.greetingstwo)