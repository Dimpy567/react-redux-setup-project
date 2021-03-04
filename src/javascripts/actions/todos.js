export const ADD_TODO = 'ADD_TODO';
export const TODO_LIST = 'TODO_LIST';
export const UPDATE_TODO = 'UPDATE_TODO';

export function addToTodo( value ) {
    return { type: ADD_TODO, value };
}

export function fetchTodos( value ) {
    return { type: TODO_LIST, value };
}

export function updateTodo( value ) {
    return { type: UPDATE_TODO, value };
}
