var ul = document.querySelector("ul");
var botao = document.querySelector("#botao");
var input = document.querySelector("#input");

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade'
];

function renderTodos(){
    for (todo of todos){
        var todoElement = document.createElement("li");
        todoElement.textContent = todo;
        ul.appendChild(todoElement);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#' );
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);

        linkElement.onclick = function(){
            ul.removeChild(todoElement);
        }
    }
}

renderTodos();

botao.addEventListener("click", function(){
    var texto = input.value;
    todos.push(texto); 
    var li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li); 
    input.value = '';
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href','#' );
    var linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);
    li.appendChild(linkElement);

    saveToStore();

    linkElement.onclick = function(){
        ul.removeChild(li);
        saveToStore();
    } 

});

function saveToStore(){
    localStorage.setItem('list_todo', JSON.stringify(todos));
}