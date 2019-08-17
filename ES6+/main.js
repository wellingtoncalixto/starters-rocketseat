import { promises } from "fs";

// Exercicio 1
class Usuario {
  constructor(email, senha) {
    this.usuario = [
      {
        email,
        senha
      }
    ];
  }
  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario("teste@teste", "123");
const Admin1 = new Admin("teste@teste", "123");
console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

// Exercicio 2

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const idades = usuarios.map(item => {
  return item.idade;
});

console.log(idades);

const rocket = usuarios.filter(item => {
  if (item.empresa === "Rocketseat" && item.idade > 18) {
    return item;
  }
});

console.log(rocket);

const google = usuarios.find(item => {
  return item.empresa === "Google";
});

console.log(google);

const anos = usuarios
  .map(item => ({ ...item, idade: item.idade * 2 }))
  .filter(item => item.idade <= 50);

console.log(anos);

// 3.1
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10)

console.log(newArr)


// 3.2
const usuario = { nome: 'Diego', idade: 23 };

const idade = usuario => usuario.idade


console.log(idade(usuario))

const nome = "Diego";
const idade2 = 23;

const mostraUsuario = (nome = "Diego", idade = 18) => ({
  nome,
  idade,
});

console.log(mostraUsuario(nome, idade2));
console.log(mostraUsuario(nome))

const promise = () => new Promise((resolve, reject) => resolve());
