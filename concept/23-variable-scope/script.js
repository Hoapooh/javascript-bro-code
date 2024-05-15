// variable scope = where a variable is recognized and accessible (local vs global)

// - variable declare inside function is defined as Local variable
//      --> has local scope
// - variable declare outside function is defined as global variable
//      --> has global scope

// - local scope has the higher prioritization if there is a global scope one
// - it is recommended to use the loca scope instead of global scope in a big, complex project

let x = 3;

function func1() {
	console.log(x);
}
function func2() {
	console.log(x);
}

func1();
func2();
