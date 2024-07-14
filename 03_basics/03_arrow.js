const user = {
    username: "shaban",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "zaid"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shaban"
//     console.log(this.username);
// }
// chai()

// const chai= function (){
//     let username = "shaban"
//     console.log(this.username);
// }

// `````arrow funtion````

const chai= () => {
    let username = "shaban"
    console.log(this);
}
chai ()

// () => {} ye h arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

// magar object ko return karne ke liye {} me wrap karna hi hoga
const addTwo = (num1, num2) => ({username: "shaban"})
console.log(addTwo(3, 4))

// ;;;;;;;loop me => ka kaam

