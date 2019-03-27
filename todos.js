var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
]

function renderTodos(){

    listElement.innerHTML = '' //Faz com que os itens anteriores nao apareçam dnv

    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')

        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo)    //recebe a posiçao do todo atual
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        var linkText = document.createTextNode(' Excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)

        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
}

buttonElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos, 1)  //(posicao do vetor, quantidade itens a serem removidos)
    renderTodos()
}