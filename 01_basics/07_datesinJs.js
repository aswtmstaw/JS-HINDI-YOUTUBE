// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.getDate());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);


// specific date create karne ke liye
let myCreatedDate = new Date(2023, 0, 23)
// console.lo g(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// ye tab kaam ata jb quiz ya polls design karege, kisne fast ans diya etc
// console.log(myTimeStamp);

// jo output ayega wo miliseconds me hoga, room book hotel app bana rhe ya kuch bhi jab dates ko compare karna padta hai tab kya karna
// console.log(myCreatedDate.getTime());
// myCreatedDate ek object hai isliye usi me.getTime laga sakte
// myStamp wala aur myCreatedDate wala dono console (line 25, 28) chala ke do value ayegi milisecond me unse easily time compare kiya ja sakta hai aur bade project me kaam ayega

// console.log(Date.now());
// isse miliseconds me ayegi
//miliseconds se seconds me convert karne ke liye (compare hamesha miliseconds me karna hai)
console.log(Math.floor(Date.now()/1000));
// math.ceil nahi karna, ya round ya floor

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// + 1 isliye lagaya kyunki isme month 0 se shuru hote to user confuse na ho
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` is tarah se string manupulation hota, pichli file me diya hai 


// customize karne ke liye
// newDate.toLocaleString('default', {
    // weekday: "long",
    
// })