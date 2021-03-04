import $ from 'jquery';

const API_URL = 'http://localhost:3000/'

export function ajaxErrorHandler( { responseJSON = {}, statusText } ) {
    const message = responseJSON.message || statusText;
    return Promise.reject( Error( message ) );
}

function getJSON( url ) {
    return $.getJSON( url ).catch( ajaxErrorHandler );
}

const getTodos = () => getJSON( API_URL+ 'todos' );

function deleteTodos( todoId ) {
    const url = API_URL + 'todos/' + todoId;
    return $.ajax( {
        type: 'DELETE',
        url,
        contentType: 'application/json',
        dataType: 'json',
    } ).catch( ajaxErrorHandler );
}

function addTodo( data ) {
    let method;
    let url;
    if( data.id ){
        method = 'PUT';
        url = API_URL + 'todos/' + data.id;
    }else{
        method = 'POST';
        url = API_URL + 'todos';
    }
    return $.ajax( {
        type: method,
        url,
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify( data ),
    } ).catch( ajaxErrorHandler );
}

export default {
    addTodo,
    deleteTodos,
    getTodos,
};
