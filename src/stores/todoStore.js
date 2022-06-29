import {writable} from 'svelte/store'

export const todos = writable([]);

export const addTodo = (text) => {
    todos.update( (cur) => {
        const newTodos = [...cur, { text, completed: false, id: Date.now() }];
        return newTodos;
    })
}

export const deleteTodo = (id) => {
    todos.update(todos => todos.filter(todo => todo.id != id ))
}

export const toggleTodoCompleted = (id) => {
    todos.update(todos => {
        let index = -1;
        for(let i = 0; i < todos.length;i++){
            if(todos[i].id = id) {
                index = 1;
                break;
            }
        }
        if(index != -1) {
            todos[index].completed = !todos[index].completed;
        }
        return todos;
    })
}