// Arrow function
const sum = (a, b) => {
    return a + b;
} // posso tirar o corpo e return da função

console.log(sum(5, 5))

const greeting = (name) => {
    if(name){
        return "Olá " + name + " !"
    }else{
        return "Olá!"
    }
}

console.log(greeting('Raphael'))

const user = {
    name: 'Raphael',
    sayUserName() {
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    } 
}

user.sayUserName()

user.sayUserNameArrow()

