// for of
const arr = [ 1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// maps
// same to array but hv difference, order yaad rkhta unlike objects, duplicate value nhi hoti

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('KSA', "Kingdom of Saudi Arabia")
map.set('IN', "India")
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'PUBG'
 }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }