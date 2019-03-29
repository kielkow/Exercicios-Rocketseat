//Exercicio 1
var checaIdade = function(idade){
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
        setTimeout(function(){ console.log('Maior que 18') }, 2000)
    })  //metodo chamado pelo resolve

    .catch(function (error) {
        setTimeout(function(){ console.log('Menor que 18') }, 2000)
    })    //metodo chamado pelo reject 

/*
//Exercicio 2 e 3
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var listElement = document.querySelector('#app ul')
//var repos = JSON.parse(localStorage.getItem('list_repos')) || []


function buscar() {

    listElement.innerHTML = ''

    var loadElement = document.createElement('li')
    var loadText = document.createTextNode('Loading ...')
    loadElement.appendChild(loadText)
    listElement.appendChild(loadElement)

    userText = inputElement.value
    axios.get('https://api.github.com/users/' + userText + '/repos')
        .then(function (response) {
            var x;
            for (x in response.data) {
                console.log(response.data[x].name)
                console.log(x)
                var repoElement = document.createElement('li')
                var repoText = document.createTextNode(response.data[x].name)
                repoElement.appendChild(repoText)
                listElement.appendChild(repoElement)
            }
            listElement.removeChild(loadElement)
        })

        .catch(function (error) {
            alert('Error 404 - Not found user')
            listElement.removeChild(loadElement)
        })
}

buttonElement.onclick = buscar
*/