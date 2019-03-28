axios.get('https://api.github.com/users/kielkow')

    .then(function (response) {
        console.log(response)
    })  //metodo chamado pelo resolve

    .catch(function (error) {
        console.warn(error)
    })    //metodo chamado pelo reject 
