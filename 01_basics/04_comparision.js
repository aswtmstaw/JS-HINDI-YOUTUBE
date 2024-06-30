// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);
// string pahle hai to usko as a string hi add karege, aisa koi rule hai

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// coparision <> se pata chalta hai, isme null ko 0 mana jata hai, isliye false aayega output
// equality == ko kahte hain, ye null ko zero nahi manta

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//teeno me false hi ayega

console.log("2" === 2); // values ko strictly check karta, sath me data type bhi check karta, yaha string chnage nhi hoga number me, jaise line 8,9 me hai
// aise conversion avoid karna h