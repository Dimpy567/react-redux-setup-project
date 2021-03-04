import * as reducers from 'shop/reducers/todos';
import * as state from './../fixtures/state';

import {
    ADD_TODO,
    TODO_LIST,
    UPDATE_TODO,
} from 'shop/actions/todos';

describe( 'todoList', () => {
    const data = { title: 'test', description: 'test' };
    
    it( 'should default to blank array', () => {
        expect( reducers.todoList( [], {} ) ).toEqual( [] );
    } );

    it( 'should handle ADD_TODO', () => {
        const action = { type: ADD_TODO, value: data };
        expect( reducers.todoList( [], action ) ).toEqual( [ data ] );
    } );

    it( 'should handle TODO_LIST', () => {
        const action = { type: TODO_LIST, value: data };
        expect( reducers.todoList( [], action ) ).toEqual( data );
    } );

    it( 'should handle UPDATE_TODO', () => {
        const updatedData = { id: 1, title: 'test title 1', description: 'test description 1' };
        const { todoList } = state; 
        const action = { type: UPDATE_TODO, value: updatedData };
        expect( reducers.todoList( todoList, action ) ).toEqual( state.todoList );
    } );
} );
