import { shallow } from 'enzyme';
import React from 'react';
import Todo from 'shop/components/todos/';

import './../../helpers/enzyme-config';

describe( '<todos /> ', () => {
    const callbacks = {
        onAddTodo: () => {},
        onDeleteTodo: () => {},
        onSetTodoList: () => {},
    };
    const props = {
        todos: [],
        ...callbacks,
    };
    const wrapper = shallow( <Todo { ...props } /> );
    const div = wrapper.find( '.App' );

    it( ' renders div element  ', () => {
        expect( div.exists() ).toBe( true );
        expect( div.text() ).toEqual( '<TodoForm /><TodoList />' );
    } );

} );
