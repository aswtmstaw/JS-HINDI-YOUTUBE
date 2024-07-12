// object ko declare karne ke 2 tareeke 1. literal ki tarah 2. constructer ki tarah
// singleton obj constructer se banta hai
// literals ki tarah karne se singelton nahi banta, multiple type kuch.....
// Object.create (ye hai constrcuter method)
// const JsUser = {} // ban gaya obj 


const mySym = Symbol("key1")

 
const JsUser = {
    name: "shaban",
    "full name": "shaban khan",
    [mySym]: "mykey1",
    // [] me hi symbol use karna, otherwise check line 30
    age: 18,
    location: "mohammadi",
    email: "shaban@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) 
// bahut se log aise access karte hain obj

// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// full name string me diya tha isliye usko dot . se access nhi kia ja sakta
// console.log(JsUser[mySym]) 
// yaha output my key1 ayega, ye tarika galat, check line 15

JsUser.email = "shaban@chatgpt.com"
// Object.freeze(JsUser) 
JsUser.email = "shaban@microsoft.com"
// console.log(JsUser);

// ........ab function use kar rahe....
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());