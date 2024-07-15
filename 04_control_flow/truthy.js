const useremail = []
if (useremail){
    console.log("got the user email");
}
else {"please enter email"}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// baki sab truthy values , ex:
// "0", 'false', " ", [], {}, function(){}

// empty array aur object code me pahchanne ka tareeka 
if (useremail.length=== 0){
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length=== 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined?? 10

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")