var c = 300
let a = 500
// {} ye scopes hai, ye function ya if else ke sath ata hai
if (true){
    let a = 10
    const b = 20
    //  console.log("INNER :", a);
} 
// console.log(a);
// console.log(b);
// console.log(c);
// if ke andar block scope hai jabki uske bahar hai global scope, gscope ki value scope ke andar bhi avail. hoti hai, but scope ke andar ki value bahar nahi jani chahiye 

// ``````nested scope``````

function one (){
    const username = "shaban"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
one()

if (true){
    const username = "shaban"
    if(username === "shaban"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo()
const addTwo = function(num){
    return num + 2
}

