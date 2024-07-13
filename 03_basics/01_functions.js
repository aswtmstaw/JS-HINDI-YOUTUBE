
function sayMyName (){
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("b");
    console.log("a");
    console.log("n");
}
// 2-9 tak func ka def, function keyword h, sayMyName function ka naam hai , (){} func ka syntax h

// sayMyName()
// sayMyName ref hai, () laga diya to hua execute

function addTwoNumbers (number1, number2){
console.log(number1 + number2);
}
// addTwoNumbers()
// output = NaN (not a number), argument do
//  oopar () me jo hai wo parametrs, neeche 3,4 jo hai usko bolte arguments
// addTwoNumbers(3, 4)
// output 7, agar 4 ki jagah "4", output 34, yani js ne 3 ko bhi string maan liya, agar "a" diya to output 3a, agar null to 3 ata bas
// const result = addTwoNumbers(3, 4)
// aise bhi 8 to aa jayega, magar... (line 26)
// console.log("Result : ", result);
//.. result undefined dikhata ....value return karna alag cheej, console wala alag

function addTwoNumbers (number1, number2){
// let result = number1 + number2
// return result
// return number1 + number2
}
// result ke baad kuch bhi print nhi hoga chahe koi console likho
const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);

// ...naya function...
function loginUserMessage(username){
    if (username === undefined)
        //  or if (!username){
        console.log("Please enter a username");
        // return 
        // is return ko karne se agla return nhi ayega , tabhi likha hehehe
    }
    //   return `${username} just logged in`
// }
// console.log(loginUserMessage("shaban"))
// console.log(loginUserMessage())

// .......functions with objects and array...
// pata nhi hota ki kitne arguements ane wale hai to usi hisab se parameters rakhe jate hain

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username : "shaban",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "zaid",
    price : "399"
})

// '''array paas karna''''
const myNewArray = [100, 200, 500, 600]
function returnSecondValue (getArray){
    return getArray
}
// console.log(returnSecondValue(myNewArray));
