import Todo from "./todoModule";
export function initialDomManip() {
    const container = document.querySelector('.todo-app__content');
    const header = document.createElement('h1');

    header.textContent = 'ToDo Web App';
    header.classList = 'websiteTitle';

    container.appendChild(header);

}

export function showTodoForm(formId) {
    const todoForm = document.querySelector(formId);
    todoForm.style.display = 'block';
    todoForm.style.display = 'flex';
    todoForm.style.flexDirection = 'column';
    
}

export function hideTodoForm(formId) {
    const todoForm = document.querySelector(formId);
    todoForm.style.display = 'none';
}

export function addProjectToTable(obj) {
    const table = document.querySelector('.table-body');
    const projectRow = table.insertRow(0); // Use projectRow instead of row
    const cell1 = projectRow.insertCell(0); // Use projectRow instead of row
    const cell2 = projectRow.insertCell(1); // Use projectRow instead of row
    const cell3 = projectRow.insertCell(2); // Use projectRow instead of row
    const cell4 = projectRow.insertCell(3); // Use projectRow instead of row
    const cell5 = projectRow.insertCell(4); // Use projectRow instead of row

    cell1.textContent = obj.title;
    cell2.textContent = obj.description;
    cell3.textContent = obj.dueDate;
    cell4.textContent = obj.priority;
    cell5.textContent = obj.completed;
    // No need to append projectRow again, as it's already inserted into the table
}