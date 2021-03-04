import $ from 'jquery';
import {
    addToTodo,
    fetchTodos,
    updateTodo,
} from './../actions/todos';

import * as selectors from './../selectors/';

export function setTodoList() {
    return ( dispatch, getState, api ) => {
        return api
            .getTodos()
            .then( ( res ) => {
                dispatch( fetchTodos( res ) );
                return res;
            } );
    };
}

export function deleteTodo( id ) {
    return ( dispatch, getState, api ) => {
        const todos = selectors.getTodoList( getState() );
        const newtodos = $.grep( todos, function( e ){ 
            return e.id != id; 
        } );
        return api
            .deleteTodos( id )
            .then( ( res ) => {
                dispatch( fetchTodos( newtodos ) );
                return res;
            } );
    };
}

export function addTodo( data ) {
    return ( dispatch, getState, api ) => {
        return api
            .addTodo( data )
            .then( ( res ) => {
                if ( data.id ){
                    dispatch( updateTodo( res ) );
                }else{
                    dispatch( addToTodo( res ) );
                }
                return res;
            } );
    };
}
