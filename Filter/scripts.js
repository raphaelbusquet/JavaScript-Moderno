// Filter
const array = [1, 2, 3, 4, 5]

const highNumbers = array.filter((n) => {
    if(n >= 3){
        return n
    }
})

console.log(highNumbers)
console.log(array)

const users = [
    { name: 'John', available: true },
    { name: 'Raphael', available: false },
    { name: 'Pedro', available: false },
    { name: 'Jack', available: true },
]


const availableUsers = users.filter((user) => user.available)

const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)