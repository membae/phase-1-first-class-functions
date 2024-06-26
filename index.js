const receivesAFunction = (callback) => {
    callback();
};


const exampleCallback = () => {
    console.log("Callback function called!");
};

receivesAFunction(exampleCallback); 
function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function!");
    }
    return namedFunction;
}


const myFunction = returnsANamedFunction();
myFunction(); // Output: This is a named function!
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function!");
    };
}

const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction(); 
