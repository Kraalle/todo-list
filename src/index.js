import Todo from "./todoModule";
import { initialDomManip, showTodoForm, hideTodoForm, addProjectToTable } from "./dom-manip";
import { addTodoProject, removeTodoProject, getAllTodoProjects } from "./todoProjects";



// const todo1 = new Todo('Walking', 'Going outside for a walk', '02/04/2024', 'High', ["eat", "sleep", "program", "repeat"]);
// const todo2 = new Todo('Walking', 'Going outside for a walk', '02/04/2024', 'High', ["eat", "sleep", "program", "repeat"]);
// const todo3 = new Todo('Walking', 'Going outside for a walk', '02/04/2024', 'High', ["eat", "sleep", "program", "repeat"]);


// console.log('testing')
// addTodoProject(todo1);
// addTodoProject(todo2);
// addTodoProject(todo3);

// addProjectToTable(todo1);
// addProjectToTable(todo2);
// addProjectToTable(todo3);

const newTodoButton = document.querySelector('.add-todo-button');
newTodoButton.addEventListener('click', () => showTodoForm('#todoForm'));

const todoSubmit = document.querySelector('#todoForm');
todoSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('#todoTitle').value;
    const description = document.querySelector('#todoDescription').value;
    const dueDate = document.querySelector('#todoDueDate').value;
    const priority = document.querySelector('#todoPriority').value;
    console.log(title, description, dueDate, priority);
    if (title !== "" && description !== "" && dueDate !== "" && priority !== ""){
        hideTodoForm('#todoForm');
        addTodoProject(new Todo(title, description, dueDate, priority));


        for (let project of getAllTodoProjects()) {
            addProjectToTable(project);
            console.log(project)
        }

        clearInputs();
    }
})

function clearInputs() {
    const title = document.querySelector('#todoTitle');
    const description = document.querySelector('#todoDescription');
    const dueDate = document.querySelector('#todoDueDate');
    const priority = document.querySelector('#todoPriority');
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "High";
}




