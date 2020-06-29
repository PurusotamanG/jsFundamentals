// class ->Available from JS6
class Batman {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    // this is similar to that of function.prototype.function
    print() {
        console.log(`Id is ${this.id} and name is ${this.name}`)
    }
}

bruceWayne = new Batman(1, 'Bruce Wayne')
bruceWayne.print()


jasonTodd = new Batman(2, 'Jason Todd')
jasonTodd.print()

console.log(Batman)