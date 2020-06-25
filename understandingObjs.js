// Creating objects using Object literal
var thomasWayne = {}

thomasWayne.profession = 'Business'
thomasWayne.age = 40
thomasWayne.status = 'Deceased'
thomasWayne.minNetWorth = '$4,000,000,000'

// Creating objects using Object.create
var bruceWayne = Object.create(thomasWayne)
bruceWayne.profession = 'Super Hero/ Vigilante'
bruceWayne.status = 'Living'

// Creating objects using Object.create
var damianWayne = Object.create(bruceWayne)
damianWayne.age = 12


// Displaying the working of _proto_
console.log(`Name is Damian Wayne, age is ${damianWayne.age}, profession is ${damianWayne.profession}, has a min networth of ${damianWayne.minNetWorth} and his status is ${damianWayne.status}. His grandpa is ${damianWayne.grandpa}`)