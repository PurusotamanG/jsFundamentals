// Here x is created in local scope despite declartion being post usage of x
x = 20
console.log(x)
var x

//Function hoisting
function hoistDemo() {
    console.log("No param")
}

function hoistDemo(val) {
    console.log("Value is", val)
}

// Here the function with args is called with no params
// Result would be -> "Value is undefined"
hoistDemo()

// Here the function with args is called and 20 as param
// Result would be -> "Value is 20"
hoistDemo(20)