
// It's all about variable scoping. Variables declared in the self executing function are, by default, only available to code within the self executing function. This allows code to be written without concern of how variables are named in other blocks of JavaScript code.

// self executing function here
(function() {
   // your page initialization code here
   // the DOM will be available here
    
    //npm install prompt-sync
const prompt = require('prompt-sync')();
    const quote = prompt("");

const author = prompt("");

})();

