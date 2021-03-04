import * as thunks from 'shop/thunks/';
import $ from 'jquery';

import {
    addToTodo,
    fetchTodos,
    updateTodo,
} from 'shop/actions/todos';

import * as state from './../fixtures/state';

class FakeApi {

    constructor() {
        this.todoList = state.todoList;
    }

    getTodos() {
        return Promise.resolve( this.todoList );
    }

    deleteTodos( id ) {
        const todoList = this.todoList;
        const newtodos = $.grep( todoList, function( e ){ 
            return e.id != id; 
        } );
        return Promise.resolve( newtodos );
    }

    addTodo( data ){
        return Promise.resolve( data );
    }

}

describe( 'Thunks', () => {
    describe( 'setTodoList', () => {

        it( 'should dispatch a fetchTodos action', ( done ) => {
            const api = new FakeApi();
            const dispatch = jasmine.createSpy( 'dispatch' );
            const getState = () => state;
            const thunk = thunks.setTodoList();
            thunk( dispatch, getState, api ).then( () => {
                expect( dispatch ).toHaveBeenCalledWith( fetchTodos( state.todoList ) );
                done();
            } );
        } );
    } );

    describe( 'setTodoList', () => {

        it( 'should dispatch a fetchTodos action', ( done ) => {
            const api = new FakeApi();
            const dispatch = jasmine.createSpy( 'dispatch' );
            const getState = () => state;
            const thunk = thunks.setTodoList();
            thunk( dispatch, getState, api ).then( () => {
                expect( dispatch ).toHaveBeenCalledWith( fetchTodos( state.todoList ) );
                done();
            } );
        } );
    } );

    describe( 'deleteTodo', () => {

        it( 'should call api with todo id', () => {
            const api = new FakeApi();
            spyOn( api, 'deleteTodos' ).and.callThrough();
            const dispatch = jasmine.createSpy( 'dispatch' );
            const getState = () => state;
            const thunk = thunks.deleteTodo( 1 );
            thunk( dispatch, getState, api );
            expect( api.deleteTodos ).toHaveBeenCalledWith( 1 );
        } );

        it( 'should dispatch a fetchTodos action', ( done ) => {
            const api = new FakeApi();
            const dispatch = jasmine.createSpy( 'dispatch' );
            const getState = () => state;
            const thunk = thunks.deleteTodo( 1 );
            thunk( dispatch, getState, api ).then( ( res ) => {
                const expectedResponse = [
                    {
                       'title': 'test title 2',
                       'description': 'test description 3',
                       'id': 2
                    }
                ];
                expect( dispatch ).toHaveBeenCalledWith( fetchTodos( res ) );
                expect( expectedResponse ).toEqual( res );
                done();
            } );
        } );
    } );

    describe( 'addTodo', () => {

        it( 'should call api with data', () => {
            const api = new FakeApi();
            const data = {
                title : 'test title',
                description: 'test description'
            };
            spyOn( api, 'addTodo' ).and.callThrough();
            const dispatch = jasmine.createSpy( 'dispatch' );
            const getState = () => state;
            const thunk = thunks.addTodo( data );
            thunk( dispatch, getState, api );
            expect( api.addTodo ).toHaveBeenCalledWith( data );
        } );

        it( 'should dispatch a addToTodo action when update todo data', ( done ) => {
            const api = new FakeApi();
            const data = {
                title : 'new title',
                description: 'new description'
            };
            const dispatch = jasmine.createSpy( 'dispatch' );
            const getState = () => state;
            const thunk = thunks.addTodo( data );
            thunk( dispatch, getState, api ).then( ( res ) => {
                expect( dispatch ).toHaveBeenCalledWith( addToTodo( res ) );
                expect( data ).toEqual( res );
                done();
            } );
        } );

        it( 'should dispatch a updateTodo action when update todo data', ( done ) => {
            const api = new FakeApi();
            const data = {
                id: 1,
                title : 'test title updated',
                description: 'test description updated'
            };
            const dispatch = jasmine.createSpy( 'dispatch' );
            const getState = () => state;
            const thunk = thunks.addTodo( data );
            thunk( dispatch, getState, api ).then( ( res ) => {
                expect( dispatch ).toHaveBeenCalledWith( updateTodo( res ) );
                expect( data ).toEqual( res );
                done();
            } );
        } );

    } );

} );
