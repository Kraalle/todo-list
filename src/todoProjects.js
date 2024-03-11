let todoProjects = [];

function addTodoProject(project) {
    todoProjects.push(project);
}

function removeTodoProject(projectId) {
    todoProjects = todoProjects.filter(project => project.id !== projectId);
}

function getAllTodoProjects() {
    return todoProjects
}

export { addTodoProject, removeTodoProject, getAllTodoProjects };