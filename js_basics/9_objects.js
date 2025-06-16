// SINGLETON - Creating an object (singleton example would typically use constructors)

// OBJECT LITERALS
const mysym = Symbol("key1");

const jsuser = {
    name: "shobham",
    [mysym]: "mykey1",
    age: 19,
    location: "bilaspur",
    email: "sk@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"]
};

console.log(jsuser.email);         // Access via dot
console.log(jsuser["email"]);      // Access via bracket
console.log(jsuser[mysym]);        // Access Symbol property

// Modify email
jsuser.email = "nikhil@gmail.com";

// Freeze the object
Object.freeze(jsuser);

// These lines will not work because jsuser is frozen
// jsuser.greeting = function () {
//     console.log("hello js user");
// };
// jsuser.greetingstwo = function () {
//     console.log(`hello js user, ${this.name}`);
// };

// To demonstrate greeting, define before freeze:
const jsuser2 = {
    name: "shobham",
    greeting() {
        console.log("hello js user");
    },
    greetingstwo() {
        console.log(`hello js user, ${this.name}`);
    }
};

jsuser2.greeting();         // hello js user
jsuser2.greetingstwo();     // hello js user, shobham

// OBJECTS PART 2

// Create an object (non-singleton)
const tinderuser = {};
tinderuser.id = "123abc";
tinderuser.name = "shobham";
tinderuser.isloggedin = false;

const regularuser = {
    email: "shobham@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shobham",
            lastname: "kishan"
        }
    }
};

console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname.firstname);

// Object merging
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = Object.assign({}, obj1, obj2); // avoid mutating obj1

console.log(obj3); // {1: "a", 2: "b", 3: "c", 4: "d"}

// Array of users
const users = [
    {
        id: 1,
        email: "sk@gmail.com"
    }
];

// Safely access users
if (users[1]) {
    console.log(users[1].email);
} else {
    console.log("User at index 1 does not exist.");
}

// Tinder user info
console.log(tinderuser);
console.log(Object.keys(tinderuser));       // Keys as array
console.log(Object.values(tinderuser));     // Values as array
console.log(Object.entries(tinderuser));    // Entries as [key, value]

// Destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "shobham"
};

const { courseinstructor: instructor } = course;
console.log(instructor); // shobham

// Correct Object Declaration
const courseInfo = {
    name: "shobham",
    courseaname: "js in hindi",
    prize: "free"
};

console.log(courseInfo);

// Valid array of objects structure
const courseArray = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" }
];

console.log(courseArray);
