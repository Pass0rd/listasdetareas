document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('complete-btn')) {
            toggleComplete(target.parentElement);
        } else if (target.classList.contains('delete-btn')) {
            target.parentElement.remove();
        }
    });

    function addTask(text) {
        const taskItem = document.createElement('li');
        taskItem.textContent = text;
        taskItem.className = 'task-item';
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completada';
        completeBtn.className = 'complete-btn';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'delete-btn';
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }

    function toggleComplete(task) {
        task.classList.toggle('completed');
        const completeBtn = task.querySelector('.complete-btn');
        completeBtn.textContent = task.classList.contains('completed') ? 'Desmarcar' : 'Completada';
    }
});
