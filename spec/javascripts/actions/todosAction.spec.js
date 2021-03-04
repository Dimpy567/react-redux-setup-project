import {
    ADD_TODO,
    TODO_LIST,
    UPDATE_TODO,
    addToTodo,
    fetchTodos,
    updateTodo,
} from 'shop/actions/todos';

describe( 'addToTodo', () => {
    const data = { title : 'test', description: 'test' };
    it( 'creates an action to set todo data', () => {
        expect( addToTodo( data ) ).toEqual( {
            type: ADD_TODO, value: data
        } );
    } );
} );

describe( 'fetchTodos', () => {
    const data = { title : 'test', description: 'test' };
    it( 'creates an action to fetch todo list', () => {
        expect( fetchTodos( data ) ).toEqual( {
            type: TODO_LIST, value: data
        } );
    } );
} );

describe( 'updateTodo', () => {
    const todoData = { id: 2, title : 'test', description: 'test' };
    it( 'creates an action to update todo', () => {
        expect( updateTodo( todoData ) ).toEqual( {
            type: UPDATE_TODO, value: todoData
        } );
    } );
} );
