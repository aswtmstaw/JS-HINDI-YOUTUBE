const accountId = 144553
let accountEmail = "shaban@google.com"
var accountPassword = "12345"
accountCity = "Mohammadi"
let accountState;
// accountId = 2 not allowed

/*
var nahi use karna hai, uski jagah let use karege, kyuki usme block scope aur functional scope me issue hai
*/
accountEmail = "sjsj@jd.com"
accountPassword = "12323"
accountCity = "delhi"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);