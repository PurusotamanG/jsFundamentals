function gfn() {
    console.log("Global Func", this.x)
}

vfunc = function() {
    console.log("Var Func", this.x)
}

function lfn() {
    // x declared here is made available globally
    this.x = 12
    console.log("Local Func", this.x)
}

obj = {
    log: function() {
        var x = 5
        console.log("Object Func", this.x, x)
    }
}

// Initial run
gfn()
vfunc()
lfn()
obj.log()

console.log("\n")

// To show global values getting affected
// When inspected, this refers to global hence global context
gfn()
vfunc()
lfn()

// When inspected, this refers to the object hence local context
obj.log()