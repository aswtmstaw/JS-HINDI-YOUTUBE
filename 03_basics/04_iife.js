// Immediately Invoked Function Expressions (IIFE)
//  iska kaam 1. immediatly run karana, global var wagairah ke pollu. se bachna

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// 2 iife ke beech semicolon lgta h
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('shaban')