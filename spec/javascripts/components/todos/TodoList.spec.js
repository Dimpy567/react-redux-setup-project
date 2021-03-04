import { shallow } from 'enzyme';
import React from 'react';
import TodoList from 'shop/components/todos/TodoList';
import Todo from 'shop/components/todos/Todo';

import './../../helpers/enzyme-config';

describe( '<TodoList /> ', () => {
    const callbacks = {
        deleteTodo: () => {},
        editTodo: () => {},
    };
    const props = {
        todos: [
            { title: 'test title', description: 'test description' , id:1 },
            { title: 'test 1', description: 'test 1', id:2 },
        ],
        ...callbacks

    };
    const wrapper = shallow( <TodoList { ...props } /> );

    describe( 'renders ', () => {

        it( 'todo title  ', () => {
            const title = wrapper.find( '.post_heading' );
            expect( title.exists() ).toBe( true );
            expect( title.text() ).toEqual( 'All Todo' );
        } );

        it( '<Todo />  components', () => {
            const TodoComponent = wrapper.find( Todo );
            expect( TodoComponent.exists() ).toBe( true );
            expect( TodoComponent.length ).toEqual( 2 );
        } );
    } );
} );
