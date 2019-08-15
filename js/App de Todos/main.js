var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('lista')) || []

function renderTodos(){
  listElement.innerHTML = '';
  for (todo of todos){
    var todoElemento = document.createElement('li')
    var todoTexto = document.createTextNode(todo);

    var link = document.createElement('a');
    var linkText  = document.createTextNode('Ecluir')

    link.setAttribute('href', '#')
    link.appendChild(linkText)

    var pos = todos.indexOf(todo)
    link.setAttribute('onclick', 'deletetodo('+pos+')')

    todoElemento.appendChild(todoTexto);
    todoElemento.appendChild(link)
    listElement.appendChild(todoElemento);
  }
}
renderTodos()

function addTodo(){
  var inputTexto= inputElement.value;

  todos.push(inputTexto);
  inputElement.value="";
  save()
  renderTodos()
}

buttonElement.onclick = addTodo;

function deletetodo (pos){
  todos.splice(pos, 1)
  renderTodos()
  save()
}

function save(){
  localStorage.setItem('lista', JSON.stringify(todos));
}