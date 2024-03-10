import Todo from "./todoModule";
import { initialDomManip, showTodoForm, hideTodoForm, addProject } from "./dom-manip";
import addProject from "./addProject";

const todo1 = new Todo('Walking', 'Going outside for a walk', '02/04/2024', 'High', ["eat", "sleep", "program", "repeat"]);
const todo2 = new Todo('Walking', 'Going outside for a walk', '02/04/2024', 'High', ["eat", "sleep", "program", "repeat"]);
const todo3 = new Todo('Walking', 'Going outside for a walk', '02/04/2024', 'High', ["eat", "sleep", "program", "repeat"]);
console.log(todo1);
console.log(todo2);
console.log(todo3);
// initialDomManip();

console.log('testing')
addProject(todo1);
addProject(todo2);
addProject(todo3);

const newTodoButton = document.querySelector('.add-todo-button');
newTodoButton.addEventListener('click', () => showTodoForm('#todoForm'));

const addTodoButton = document.querySelector('#submit-todo');
addTodoButton.addEventListener('click', () => {

    hideTodoForm('#todoForm')
});




