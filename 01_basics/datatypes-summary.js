// primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // js me language ko define nahi karte, ye nhi batate ki 100 Number hai, ya kuch aur....

// jabki typescript me define karna padta
// const score : number = 100....is tarah se


const scoreValue = 100.3
// ye bhi number ki hi category me ayega, python jaise hamne padhi uski tarah dec. (float) alag se nahi

const isLoggedIn = false
// boolean type define nhi kiya


//strig symbol ka example neeche
const id = Symbol('123')
const anotherId = Symbol('123')
//value same phir bhi, result me dono ki value same nahi
console.log(id=== anotherId);

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// referance type (non primitive)
// array, objects (objects ache se padho), functions

// arrays
const heros = [" shaktiman", "hatim"]

//objects
//curly brakets me
let myObj = {
    name: "shaban",
    age: 21,
}

//function, yani () phir {}
const myFunction() = function(){ console.log("Hello world"); }

// datatype pata kaise kare?
console.log(typeof isLoggedIn);
//magar aise null ka pata karoge to show hoge 'object'
// non primitive ka karoge to object dikhayega, warna function object bhi answer likha jata jab function ka check kiya jata