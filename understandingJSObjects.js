// int
var number = 10
console.log(number)

// string
var name = 'Tony Start'
console.log(name)

// boolean
var alive = true
console.log(alive)

// object
var info = {
    age: 40,
    networth: '$7,000,000,000',
    aka: 'Iron Man'
}

// arrays -> they are heterogenous lists
// Act like stack, queue, list and normal arrays

// normal array/ list usage
var arr = [1, 2]
console.log(arr[0])

// stack like usage
var arr = ['1']
arr.push(1)
arr.push(info)
arr.push(3)
console.log(arr)
arr.pop()
console.log(arr)

// queue like usage
arr.push(10000)
console.table(arr)
arr.shift() // removes the 0th element
console.table(arr)
arr.unshift(500) // adds element to 0th position
console.table(arr)