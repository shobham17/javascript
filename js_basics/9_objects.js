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

//*********OBJECTS PART2********** */
// const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name ="shobham"
tinderuser.isloggedin = false

const regularuser = {
    email : "shobham@gmail.com",
    fullname : {
        userfullname : {
            firstname : "shobham",
            lastname : "kishan"
        }
    }
}
console.log(regularuser.fullname) 
console.log(regularuser.fullname.userfullname.firstname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = Object.assign(obj1, obj2)

const users =  [
    {
        id  : 1,
        email : "sk@gmail.com"
    }
]

users[1].email
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "shobham"
}

const {courseinstructor : instructor } = course
console.log(instructor)



{
    name =  "shobham",
    "courseaname"  :   "js in hindi",
    "prize" :  "free"
}

[
    {},
    {},
    {}
]

