// memory 2 tpe ki
// 1. stack 2. heap
// prmitive me stack aur non primitive me heap
// stack me copy milta, heap me original hi use hoti, uska reference milta

let myYoutubeName = "aswtmstawdotcom"
// ye to stack me jayegi 

// ab value ko change 
let anotherName = myYoutubeName
//console.log(anotherName);
//isme myYoutubeName wali value ayegi

// ab agar value change karna ho to...
anotherName = "mohdshaban01"
//console.log(anotherName);
//console.log(myYoutubeName);
// myYoutubeName me abhi bhi value aa rhi aswtmstaw
// yani stack me dusre box pe aa gyi
// yani value change nhi hoti copy hoke gyi thi

// ab heap....................
let userOne = {
    email: "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne
// wo value heap me gayi thi, usi ka refrence milega , value chahe alag declare kardi

userTwo.email = "user2@google.com"

console.log(userOne.email);
console.log(usertwo.email);
// value dono me same ayegi