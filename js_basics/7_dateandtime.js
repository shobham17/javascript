let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())

let mycreateddate = new Date(2023, 0, 23)
console.log(mycreateddate.toDateString())

let createddate = new Date("2023-01-14")
console.log(createddate.toLocaleString())

let mytimestamp = date.now()
console.log(mytimestamp)