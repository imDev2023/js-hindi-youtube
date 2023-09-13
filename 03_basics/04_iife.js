// Immediately Invoked Function Expressions (IIFE)


( function chai() {
    // named IIFE
    console.log(`DB Connected`);
})();


( (name) => {
    // unnamed IIFE
    console.log(`DB Connected Two ${name}`);
})("FARHAN")