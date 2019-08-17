// // Aula de Classes

// class List {
//   constructor() {
//     this.data = [];
//   }
//   add(data) {
//     this.data.push(data);
//     console.log(data);
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super();
//     this.usuario = "wellington";
//   }
//   mostrarUsuario() {
//     console.log(this.usuario);
//   }
// }

// const MinhaLista = new TodoList();

// document.getElementById("novotodo").onclick = function() {
//   MinhaLista.add("novo");
// };

// MinhaLista.mostrarUsuario();

// // classe statica

// class Matematica {
//   static soma(a, b) {
//     return a + b;
//   }
// }

// console.log(Matematica.soma(1, 2));

// //  Aula de Const e Let


// //Mutação 
// const usuario = {nome: 'Wellington'}

// usuario.nome = 'Diego'

// console.log(usuario)


// // variaveis de escopo

// function teste(x){
//   let y = 2;

//   if (x>y){

//     console.log(`${x} maior que ${y}`)
//   }else{
//     console.log(`${y} maior que ${x}`)    
//   }
// }
// teste(10)

// // operações em vetores

// const arr = [1,2,3,4,5,6]

// //pegando só os valores do array
// const newArr = arr.map(function(item){
//   return item * 2
// })

// console.log(newArr)

// //pegando os valores do arry e o index de cada um 
// const newArr2 = arr.map(function(item, index){
//   return item * index
// })

// console.log(newArr2)

// //reduce usado por exemplo para calcular  array

// const sum = arr.reduce(function(total, next){
//   return total + next
// })

// console.log(sum)


// //filter, usado para filtrar elementos de um array
// const filter = arr.filter(function(item){
//   return item % 2 === 0
// })

// console.log(filter)

// //find, usado para encontrar um elemento no array

// const find = arr.find(function(item){
//   return item === 4
// })

// console.log(find)

// //Arrow function

// //com parenteses
// const newArr3 = arr.map((item)=>{
//   return item * 100
// })

// console.log(newArr3)

// //sem parenteses quando a funçao receber apenas um elemento
// const newArr4 = arr.map(item =>{
//   return item * 100
// })

// console.log(newArr4)

// // sem o uso da chaves apenas quando for para retornar um valor
// const newArr5 = arr.map(item => item * 100)

// console.log(newArr5)

// // const como funçao recebendo um objeto

// const teste2 = () => ({nome: 'teste'})

// console.log(teste2())

// //parametros padrao

// //function normal
// function soma(a = 3, b = 6){
//   return a + b
// }
// //arrow function
// const soma2 = (a = 3, b = 6) => a + b

// console.log(soma(1))
// console.log(soma())
// console.log(soma2(1))
// console.log(soma2())

// // desestruturação

// const usuario2 = {
//   nome: 'wellington',
//   idade: 20,
//   endereco:{
//     cidade: 'Mogi Mirim',
//     estado:'SP'
//   }
// }

//  const {nome , idade, endereco: {cidade}} = usuario2

// console.log(nome)
// console.log(idade),
// console.log(cidade)

// // desestruturaçao em functions

// function information ({nome}){
//   console.log (nome)
// }

// information(usuario2)

// //Rest

// const usuario3 = {
//   nome2: 'wellington',
//   idade: '20',
//   empresa: 'nenhuma'
// }

// const {nome2, ...resto } = usuario3

// console.log(nome, resto)

// const [a,b, ...c] = arr

// console.log(a, b, c)

// function soma3(a,b, ...params){
//   return params
// }

// console.log(soma3(1,2,3,4))

// // Spread

// const arr2 = [1,2,3]
// const arr3 = [4,5,6]

// const arr4 = [...arr2, ...arr3]

// console.log(arr4)

// const usuario4 =  {...usuario3, nome:'diego'}

// console.log(usuario4)

// object short syntax
// const nome = 'Wellington'

// const idade = 20

// const usuario = {
//   nome,
//   idade,
//   empresa: 'nenhuma'
// }

// console.log(usuario)