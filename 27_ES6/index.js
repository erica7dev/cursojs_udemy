
  
  // this do () => é relacionado ao ELEMENTO PAI
/*const arrowSum = (a, b) => a + b // Nao usa return

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
  if (name) {
    return 'Hello ' + name + '!'
  } else {
    return 'Hello!'
  }
}

console.log(greeting());*/

//filter
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n
  }
})

console.log(highNumbers)

const users = [
  { name: 'Matheus', available: true },
  { name: 'Pedro', available: false },
  { name: 'Marcos', available: true },
  { name: 'Josias', available: false },
]

const availableUsers = users.filter((user) => user.available) //true

console.log(availableUsers)

//map
// 4 map
const products = [
  { name: 'Camisa', price: 10.99, category: 'Roupa' },
  { name: 'Chaleira elétrica', price: 150, category: 'Eletro' },
  { name: 'Fogão', price: 499, category: 'Eletro' },
  { name: 'Calça jeans', price: 49.99, category: 'Roupa' },
]

products.map((product) => {
  if (product.category === 'Roupa') {
    product.onSale = true
  }
})

console.log(products)


//template literals
const userName = 'Matheus'
const age = 30

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos!`)


//Destructuring
const fruits = ['Maçã', 'Mamão', 'Laranja']

const [f1, f2, f3] = fruits

console.log(f1)

const productDetails = {
  name: 'Mouse',
  price: 39.99,
  category: 'Periféricos',
  color: 'Cinza',
}

const {
  name: productName,
  price: productPrice,
  category: productCategory,
  color,
} = productDetails

console.log(
  `O nome do produto é ${productName}, custa R$${productPrice} e é da cor ${color}.`,
)


//spread
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = { name: 'Gol' }
const carBrand = { brand: 'VW' }
const otherInfos = { km: 100000, price: 49000 }

const car = { ...carName, ...carBrand, ...otherInfos }

console.log(car)


//classes
class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Product('Camisa gola V', 20)

console.log(shirt.productWithDiscount(10))



//HErança
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price) //this 
    this.colors = colors//prop que inventei p/ constructor herdado
  }

  showColors() {
    console.log('As cores são: ')
    this.colors.forEach((color) => {
      console.log(color)
    })
  }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, [
  'Preto', //colors
  'Amarelo',
  'Verde',
])

console.log(hat.name)

hat.showColors()