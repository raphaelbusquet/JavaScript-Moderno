// Classes

class Product {
    constructor(name, price) {
        this.name = name; // Pode ser modificado ex.: "Nome do produto" + name 
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)

console.log(shirt.productWithDiscount(10))

const tenis = new Product("Tenis", 20)

console.log(`O ${tenis.name}, custa ${tenis.price} e com desconto está por apenas ${tenis.productWithDiscount(30)}.`)

class Cursos {
    constructor(curso, cargaHoraria) {
        this.curso = curso
        this.cargaHoraria = cargaHoraria
    }
}

console.log(Cursos)

const java = new Cursos("Java", 30)
const javaS = new Cursos("JavaS", 30)

console.log(java, javaS)