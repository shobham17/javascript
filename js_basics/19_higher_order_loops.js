// FOR OF LOOP

const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    console.log(num)
}

const greetings = "hello world!"
for(const greet of  greetings){
    console.log(`each char is ${greet}`)
}


//MAPS
const map = new Map()
map.set('IN',"india")
map.set('USA', "United states of america")
map.set('FR', "france")
// console.log(map)

for(const [key, value] of map){
    console.log(key,":-", value)
}

const myobject =  {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
for(const [key,value] of myobject){
    console.log(key,':-', value)
}
//this will show error as the structure is not iterable


const  myobject = {
    js : 'javascript',
    cpp  : 'c++',
    rb : 'ruby',
    swift  : "swift  by apple"
}
for(const key in myobject){
    console.log(myobject[key])
}

for(const key in myobject){
    console.log(`${key}  shortcut is for ${myobject[key]}`)
}


const programming = ["js","rb", "py",  "java", "cpp"]
for(const key in programming){
    console.log(key)
}
//thsi will  print all the keys of the array which is the index

//to print the values
for(const key in programming){
    console.log(programming[key])
}

//FOR  EACH LOOP 
const programming = ["js","rb", "py",  "java", "cpp"]

coding.forEach( function (val) {
    console.log(val)
})

coding.forEach( (item) => {
    console.log(item)
})


function printme(item){
    console.log(item)
}
coding.forEach(printme)


//here it is  array of objects
const mycoding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "python",
        languagefilename : "python"
    },
    {
        languagename : "java",
        languagefilename : "java"
    }
]

mycoding.forEach((item) => {

    console.log(item.languagename)
})