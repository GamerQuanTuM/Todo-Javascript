// Import stylesheets
import './style.css';

let addButton = document.querySelector('.todo-btn');
let todoInput = document.querySelector('.todo-input');
let todoList = document.querySelector('.todo-list'); //ul
let removeAll = document.querySelector('#remove-btn');

console.log(removeAll)

function AddTodos(e) {
  e.preventDefault();
  let input = todoInput.value;
  if (todoInput.value === '') {
    return;
  }
  let todoItem = document.createElement('li'); //li
  todoItem.className = 'todo-item';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-checkbox';

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      text.classList.add('checked');
    } else {
      text.classList.remove('checked');
    }
  });

  let text = document.createElement('span');
  text.className = 'todo-text';
  text.style.color = 'black';
  text.textContent = input;

  let editButton = document.createElement('button');
  editButton.className = 'delete-btn';
  editButton.textContent = 'Edit';
  editButton.style.marginRight="10px"
  

  let deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = 'Delete';
  

  todoList.appendChild(todoItem);
  todoItem.appendChild(checkbox);
  todoItem.appendChild(text);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);

  function removeList() {
    todoItem.remove();
  }
  deleteButton.addEventListener('click', removeList);
  todoInput.value = ''; 
}

removeAll.addEventListener("click",function(){
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});

addButton.addEventListener('click', AddTodos);
