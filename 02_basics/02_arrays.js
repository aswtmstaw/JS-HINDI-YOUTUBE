const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)


// array ke andar array aa jayega, actually dc wale array ko usne as a element le liya

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// push ki jagah concat dekhe, combine karke new array dikhata hai
//  push existing array pe hi work kar jata , alag se const nhi
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// spread hai ye, ek ek elements spread ho jayege , concat ka alternative

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// kabhi kahi se data select karte to kisi aur formate me aa sakta hai , magar chahiye array to kaise convert?

// console.log(Array.isArray("shaban"))
// asking k array hai ki nahi, false show ho raha
// console.log(Array.from("shaban"))
// ye wala array bana dega

console.log(Array.from({name: "shaban"})) // interesting, isme empty array, drct convrt nhi kr p rha

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

// is array, of, aur from wale ke bare me aur ache se padhna , reminder hehe;)