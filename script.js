// Sample data
const tasks = [
  { id: 1, title: 'Task 1', list: 'todo' },
  { id: 2, title: 'Task 2', list: 'inprogress' },
  { id: 3, title: 'Task 3', list: 'done' }
];

// Function to render tasks on the board
function renderTasks() {
  const todoList = document.getElementById('todo-list');
  const inprogressList = document.getElementById('inprogress-list');
  const doneList = document.getElementById('done-list');

  todoList.innerHTML = '';
  inprogressList.innerHTML = '';
  doneList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;

    if (task.list === 'todo') {
      todoList.appendChild(li);
    } else if (task.list === 'inprogress') {
      inprogressList.appendChild(li);
    } else if (task.list === 'done') {
      doneList.appendChild(li);
    }
  });
}

// Initial rendering of tasks
renderTasks();
