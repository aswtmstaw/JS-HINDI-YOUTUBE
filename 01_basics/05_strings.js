const name = "shaban"
const repoCount = 50

// console.log(name + repoCount + " Value");
// purana syntax hai, aisa likhne se acha hai jaise neeche likha waisa likho


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string declare karne ka dusra tarika
// const gameName = new String('shabanhc')

// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

//ab const gameName = new String('shabanhc') ki jagah dusra likh rhe
const gameName = new String('shaban-hc-com')

// const newString = gameName.substring(0, 4)
// console.log(newString);
//oopar wala 0 se 3 tak value dega, 4th nahi

// const anotherString = gameName.slice(-2, 4)
//iski khasiyat hai ki minus me de skte, to reverse start karega
// console.log(anotherString);
// mere me nahi dikha raha idk why?

// const newStringOne = "   shaban    "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// is trim wale se jo extra space hai , wo chala jayega 


// agar link diya hai
// const url = "https://shaban.com/shaban%20khan"
// yaha agar %20 ki jagah space hota to usko bhi browser nhi samjhta , hata deta , aur %20 kar deta... ab is %20 ko hatane ka tareeka....
// console.log(url.replace('%20', '-'))

// agar replace nhi karna, balki kuch pouchna hai to...
// console.log(url.includes('sundar'))

// ab jo 21  number par diya hai wo - - me hai to ham chahte hain wo ki split ho jaye based on - to uske liye.....
console.log(gameName.split('-'));