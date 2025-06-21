const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnums = mynums.filter((num) => num > 4);
console.log(newnums);

const nums = []
mynums.forEach((num) => {
    if(num > 4){
        nums.push(num)
    }
})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
];

const userbooks = books.filter((bk) => bk.genre === 'History')
const publishbooks = books.filter((bk) => { 
    return bk.publish >= 2000 && bk.genre === 'History'
})
//NOTE=>  WHILE OPENING A SCOPE USE RETUEN KEYWORD ASABOVE 
console.log(userbooks)
console.log(publishbooks)


const mynum =  [1,2,3,4,5,6,7,8,9,78]
// const newnum = mynum.map((num) => num +10)

//chaining
const newnum = mynum
.map((num) => num*10)
.map((num)=>num + 1)
//this is called chaining
console.log(newnum)
//this will add 10to each value in the array


//*************REDUCE****************
const red  = [1,2,3]
// const mytotalnum = red.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currrval: ${currval}`)
//     return acc + currval
// },0)

const mytotal = red.reduce((acc, curr)=> acc+curr, 0)
console.log(mytotalnum)


const shoppingcart= [
    {
        itemname :"jscourse",
        price : "2999"
    },
    {
        itemname :"python",
        price : "2999"
    },
    {
        itemname :"mobile dev",
        price : "2999"
    }
]

const  pricetopay =  shoppingcart.reduce((acc,item)=> acc + item.price, 0)
