
class Product {
    constructor(name, price) {
        this.name = name; // Pode ser modificado ex.: "Nome do produto" + name 
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
} // Feita no exercício 'Classes'

// herança 

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapeú", 22.99, ["Preto", "Azul", "Branco"])

console.log(hat.name)

console.log(hat.productWithDiscount(10))

hat.showColors()