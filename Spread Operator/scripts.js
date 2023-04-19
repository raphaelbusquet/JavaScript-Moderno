// Spread Operator

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1,...a2]  // Não cria uma matriz

console.log(a3)

const a4 = [0, ...a1 ,4]

console.log(a4)

const carName = {name: 'Gol'} 
const carBrand = {Brand: 'VW'} 
const otherInfos = {km: 100000, price: 49000} 

const car = {...carName, ...carBrand, ...otherInfos} // Propriedades que eu já tinha com novas que eu quiser adicionar

console.log(car)


