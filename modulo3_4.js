//Exercicio 1
/*var checaIdade = function(idade){
    return new Promise(function(resolve, reject){   

                 if(idade >= 18){
                     resolve()
                 }
                 else{
                     reject()
                 }

    })
}
checaIdade(15)
    .then(function (response) {
        console.log("Maior que 18")
    })  //metodo chamado pelo resolve

    .catch(function (error) {
        console.warn("Menor de 18")
    })    //metodo chamado pelo reject 
*/

//Exercicio 2 e 3
axios.get('https://api.github.com/users/kielkow')

    .then(function (response) {
        console.log(response.data.login)
    })  //metodo chamado pelo resolve

    .catch(function (error) {
        console.warn(error)
    })    //metodo chamado pelo reject 