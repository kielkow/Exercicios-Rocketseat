var minhaPromisse = function(){
    return new Promise(function(resolve, reject){   //resolve = resultado teve sucesso
         var xhr = new XMLHttpRequest()             //reject = resultado não teve sucesso
         xhr.open('GET','https://api.github.com/users/kielkow')
         xhr.send(null)

         xhr.onreadystatechange = function(){
             if(xhr.readyState === 4){
                 if(xhr.status === 200){
                     resolve(JSON.parse(xhr.responseText))
                 }
                 else{
                     reject('Erro na requisição')
                 }

             }
         }

    })
}

minhaPromisse()
 .then(function(response){
    console.log(response)
 })  //metodo chamado pelo resolve

 .catch(function(error){
    console.warn(error)
 })    //metodo chamado pelo reject 
