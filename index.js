let a = Math.floor(Math.random() * 1000)
let b = Math.floor(Math.random() * 1000)

function add(x,y) {
    return x + y
}

function subtract (x,y) {
    return x-y
}

function multiply (x,y) {
    return x*y
}

function divide (x,y) {
    return x/y
}

function increment(n) {
    return ++n
}

function decrement(n) {
    return --n
}

function makeInt(n) {
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    return parseFloat(n)
}