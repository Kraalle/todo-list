
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
