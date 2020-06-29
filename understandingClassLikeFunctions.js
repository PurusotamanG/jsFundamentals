// Capitalised function names points to class like usage
// Never call them like normal functions
function Hero(name, power) {
    Hero.totalHeroes++
    this.name = name
    this.power = power
}

// Added outside to reduce multiple reassignments
// Values outside prototype are static in nature
Hero.totalHeroes = 0

// Added outside to reduce multiple reassignments
// Values inside prototype are shared across all the instances of objects created
Hero.prototype.print = function() {
    console.log(`Hero is ${this.name} an his power is ${this.power} and total heroes count is ${Hero.totalHeroes}`)
}

// Creating a new object of type hero
flash = new Hero('Flash', 'Super speed')
flash.print()

// Creating a new object of type hero
supes = new Hero('Superman', 'Super strength')
supes.print()