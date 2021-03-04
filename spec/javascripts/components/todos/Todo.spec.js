import { shallow } from 'enzyme';
import React from 'react';
import Todo from 'shop/components/todos/Todo';

import './../../helpers/enzyme-config';

describe( '<Todo /> ', () => {
    const callbacks = {
        deleteTodo: () => {},
        editTodo: () => {},
    };
    const props = {
        todo: { title: 'test title', description: 'test description' },
        ...callbacks
    };
    const wrapper = shallow( <Todo { ...props } /> );
    describe( 'renders ', () => {

        it( 'todo title  ', () => {
            const title = wrapper.find( '.post_title' );
            expect( title.exists() ).toBe( true );
            expect( title.text() ).toEqual( 'test title' );
        } );

        it( 'todo description  ', () => {
            const description = wrapper.find( '.post_message' );
            expect( description.exists() ).toBe( true );
            expect( description.text() ).toEqual( 'test description' );
        } );
    } );

    describe( 'Edit button', () => {
        it( 'renders the button', () => {
            const btn = wrapper.find( '.edit' );
            expect( btn.render().text() ).toEqual( 'Edit' );
        } );

        it( 'calls editTodo onClick', () => {
            const editTodo = jasmine.createSpy( 'editTodo' );
            const updatedWrapper = shallow( <Todo { ...props } editTodo={ editTodo } />, );
            const btn = updatedWrapper.find( '.edit' );
            btn.prop( 'onClick' )();
            expect( editTodo ).toHaveBeenCalled();
        } );
    } );

    describe( 'Delete button', () => {
        it( 'renders the button', () => {
            const btn = wrapper.find( '.delete' );
            expect( btn.render().text() ).toEqual( 'Delete' );
        } );

        it( 'calls deleteTodo onClick', () => {
            const deleteTodo = jasmine.createSpy( 'deleteTodo' );
            const updatedWrapper = shallow( <Todo { ...props } deleteTodo={ deleteTodo } />, );
            const btn = updatedWrapper.find( '.delete' );
            btn.prop( 'onClick' )();
            expect( deleteTodo ).toHaveBeenCalled();
        } );
    } );

} );
