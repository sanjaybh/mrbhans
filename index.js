/*let authorName = (function(){
	var name = 'Sanjay Bhan';
	
	return name;
})()
*/

/* Branch related changes in v1.0 */

/*
function mrbhans_trim(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};

// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {mrbhans_trim, sayHi, sayBye}; // a list of exported variables
*/

//calc.js
let sum = (a, b) => { return a + b; }

let trimString = (string) => {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
}

// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}


export { sum, trimString };
