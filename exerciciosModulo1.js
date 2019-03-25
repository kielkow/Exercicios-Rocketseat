//Exercicio 1
var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

console.log("O usuário mora em " + endereco.cidade + " / " + endereco.uf + " ,  no bairro " +
    endereco.bairro + " , na rua " + endereco.rua + " com numero: " + endereco.numero)



//Exercicio 2
function par(x, y) {
    while (x <= y) {
        if (x % 2 == 0) {
            console.log(x)
        }
        x++
    }
}
par(1, 10)


//Exercicio 3
function temHabilidade(skills) {
    console.log(skills.indexOf("Javascript") !== -1)
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);




//Exercicio 4
function experiencia(anos) {
    if (anos <= 1) {
        return 'iniciante'
    }
    else if (anos > 1 && anos <= 3) {
        return 'intermediario'
    }
    else if (anos > 3 && anos <= 6) {
        return 'avançado'
    }
    else {
        return 'jedi master'
    }
}
var anosEstudo = 7;
console.log(experiencia(anosEstudo));




//Exercicio 5
function exibir(usuarios){
    for(usuario of usuarios){
       console.log("O " + usuario.nome +" possui as habilidades: " + usuario.habilidades.join(", "))
    }
}
var usuarios = [
   {
   nome: "Diego",
   habilidades: ["Javascript", "ReactJS", "Redux"]
   },
   {
   nome: "Gabriel",
   habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
   }
];
exibir(usuarios)



