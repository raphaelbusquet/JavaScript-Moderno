// Desctructuring

const fruits = ["maçã", "laranja", "mamão"]

const [f1, f2, f3] = fruits

console.log(f1)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "periféricos",
    color: "cinza"
}

const {name: productName, price: price, category: productCategory, color: color} = productDetails 

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categpry ${productCategory} e tem a cor ${color}.`)