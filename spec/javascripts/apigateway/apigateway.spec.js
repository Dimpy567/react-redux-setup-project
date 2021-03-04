import 'jasmine-ajax';
import  API from 'shop/apigateway/';

import * as state from './../fixtures/state';

describe( 'apigateway', () => {
    const API_URL = 'http://localhost:3000/'

    beforeEach( () => {
        jasmine.Ajax.install();
    } );

    afterEach( () => {
        jasmine.Ajax.uninstall();
    } );

    describe( 'getTodos', () => {
        it( 'should return the todo list', ( done ) => {
            jasmine.Ajax.stubRequest( API_URL+'todos' )
                .andReturn( { responseText: JSON.stringify( state.todoList ) } );
            API.getTodos().then( ( res ) => {
                expect( res ).toEqual( state.todoList );
                done();
            } );
        } );
    } );

    describe( 'deleteTodos', () => {
        it( 'should return the blank object', ( done ) => {
            jasmine.Ajax.stubRequest( API_URL+'todos/2' )
                .andReturn( { responseText: JSON.stringify( {} ) } );
            API.deleteTodos( 2 ).then( ( res ) => {
                expect( res ).toEqual( {} );
                done();
            } );
        } );

        it( 'fails with an error message in case of error', ( done ) => {
            jasmine.Ajax.stubRequest( API_URL+'todos/1', ).andReturn( {
                status: 500,
                responseText: JSON.stringify( { message: 'Whoops!' } ),
            } );
            API.deleteTodos( 1 ).catch( ( error ) => {
                expect( error ).toEqual( Error( 'Whoops!' ) );
                done();
            } );
        } );
    } );

    describe( 'addTodo', () => {
        const data = { title : 'test', description: 'test' };

        it( 'should return the updated result', ( done ) => {
            data[ 'id' ] = 2;
            jasmine.Ajax.stubRequest( API_URL+'todos/2' )
                .andReturn( { responseText: JSON.stringify( data ) } );
            API.addTodo( data ).then( ( res ) => {
                const request = jasmine.Ajax.requests.mostRecent();
                expect( res ).toEqual( data );
                expect( request.method ).toBe( 'PUT' );
                done();
            } );
        } );

        it( 'should return the added result', ( done ) => {
            jasmine.Ajax.stubRequest( API_URL+'todos' )
                .andReturn( { responseText: JSON.stringify( data ) } );
            API.addTodo( data ).then( ( res ) => {
                const request = jasmine.Ajax.requests.mostRecent();
                expect( res ).toEqual( data );
                expect( request.method ).toBe( 'POST' );
                done();
            } );
        } );

        it( 'fails with an error message in case of error', ( done ) => {
            jasmine.Ajax.stubRequest( API_URL+'todos', ).andReturn( {
                status: 500,
                responseText: JSON.stringify( { message: 'Whoops!' } ),
            } );
            API.addTodo( {} ).catch( ( error ) => {
                expect( error ).toEqual( Error( 'Whoops!' ) );
                done();
            } );
        } );
    } );
} );
