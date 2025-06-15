// NESTED SCOPE
function one(){
    const username = "shobham"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username = "shobham"
    if(username == "shobham"){
        const website =  "youtube"
        console.log(username + website)
    }
    // console.log(website) ERROR
}
// console.log(username) ERROR


function addone(num){
    return num+1
}
addone(5)

const addtwo = function(num){
    return num + 2
}
addtwo(5)