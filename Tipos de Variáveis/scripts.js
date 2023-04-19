// Var tem o escopo global, enquanto o let tem escopo de blocos
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i < 5; i++) {
    console.log(i) 
}

console.log(i) // 100

function logName() {
    const name = 'Matheus'
    console.log(name)
}

const name = 'Pedro'

logName()

console.log(name)

name = 'Teste' // error
