document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');
    const todos = [];
  
    todoForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const newTodoValue = newTodoInput.value;
      todos.push(newTodoValue);
  
      const todoTemplate = todos.map(todo => `<li>${todo}</li>`).join('');
      todoList.innerHTML = todoTemplate;
      newTodoInput.value = '';
    });
  });
  