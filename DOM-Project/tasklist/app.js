// Define Our UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All event listener
loadEventListeners();

// function: loadEventListeners()
function loadEventListeners(){
    
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add Task Event
    form.addEventListener('submit', addTask);
    // Remove Task Event
    taskList.addEventListener('click', removeTask);
    // Clear Task Event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks Event
    filter.addEventListener('keyup', filterTasks);

}

// function: addTask()
function addTask(e){

    if(taskInput.value === ''){
        alert('Add a Task');
    }else{
        // Create Li Element
        const li = document.createElement('li');
        // Add Class
        li.className = 'collection-item';
        // Create Text node and Append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create New Link Element
        const link = document.createElement('a');
        // Add Class
        link.className = 'delete-item secondary-content';
        // Add Icon HTML
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Appent link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // Store Tasks in LS
        storeTaskInLocalStorage(taskInput.value);
        
        // Clear Input
        taskInput.value = '';
    }
    e.preventDefault();
}
// function: storeTaskInLocalStorage()
function storeTaskInLocalStorage(newTask){
    let tasks;
    if(localStorage.getItem('tasks') === null ){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function: getTasks()
function getTasks(){

    let tasks;

    if(localStorage.getItem('tasks') === null ){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function(task){

       // Create Li Element
       const li = document.createElement('li');
       // Add Class
       li.className = 'collection-item';
       // Create Text node and Append to li
       li.appendChild(document.createTextNode(task));
       // Create New Link Element
       const link = document.createElement('a');
       // Add Class
       link.className = 'delete-item secondary-content';
       // Add Icon HTML
       link.innerHTML = '<i class="fa fa-remove"></i>';
       // Appent link to li
       li.appendChild(link);

       // Append li to ul
       taskList.appendChild(li);
        
    });
    
}
// function: removeTask()
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        //console.log(e.target);
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();

            // Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    e.preventDefault();
}

// function: removeTaskFromLocalStorage()
function removeTaskFromLocalStorage(taskItem){
    
    let tasks;
    if(localStorage.getItem('tasks') === null ){

        tasks = [];

    }else{

        tasks = JSON.parse(localStorage.getItem('tasks'));    
    }
    
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}


// function: clearTasks()
function clearTasks(){
    // taskList.innerHTML = '';

    // Faster
    // https://jsperf.com/innerhtml-vs-removechild/47
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from LS
    clearTaskFromLocalStorage();

}

// function: clearTasksFromLocalStorage()
function clearTaskFromLocalStorage(){
    localStorage.clear();
}

// function: filterTasks()
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(function(task){

       const item = task.firstChild.textContent;

       if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
       }else {
           task.style.display = 'none';
       }
        
    });
}