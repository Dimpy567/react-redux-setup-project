import { shallow } from 'enzyme';
import React from 'react';
import TodoForm from 'shop/components/todos/TodoForm';

import './../../helpers/enzyme-config';

describe( '<TodoForm /> ', () => {
    const callbacks = {
        onAddTodo: () => {}
    };
    const props = {
        todo: {},
        ...callbacks
    };
    let wrapper = shallow( <TodoForm { ...props } /> );

    describe( 'renders ', () => {

        it( 'title  ', () => {
            const title = wrapper.find( '.post_heading' );
            expect( title.exists() ).toBe( true );
            expect( title.text() ).toEqual( 'Add Todo' );
        } );

        it( 'input  ', () => {
            const input = wrapper.find( 'input' );
            expect( input.exists() ).toBe( true );
            expect( input.length ).toEqual( 1 );
            expect( input.prop( 'type' ) ).toEqual( 'text' );
            expect( input.prop( 'name' ) ).toEqual( 'title' );
            expect( input.prop( 'placeholder' ) ).toEqual( 'Enter Todo Title' );
            expect( input.prop( 'value' ) ).toEqual( '' );
        } );

        it( 'textarea  ', () => {
            const textarea = wrapper.find( 'textarea' );
            expect( textarea.exists() ).toBe( true );
            expect( textarea.length ).toEqual( 1 );
            expect( textarea.prop( 'name' ) ).toEqual( 'discription' );
            expect( textarea.prop( 'cols' ) ).toEqual( '28' );
            expect( textarea.prop( 'rows' ) ).toEqual( '5' );
            expect( textarea.prop( 'placeholder' ) ).toEqual( 'Enter Todo' );
            expect( textarea.prop( 'value' ) ).toEqual( '' );
        } );

        it( 'button  ', () => {
            const btn = wrapper.find( 'button' );
            expect( btn.exists() ).toBe( true );
            expect( btn.length ).toEqual( 2 );
            
        } );

    } );

    describe( 'Should insert value in ', () => {
        it( ' input box and uppdate the state.', () => {
            const input = wrapper.find( 'input' );
            input.simulate( 'change', { target: { name: 'title', value: 'test' } } );
            const coponnentState = wrapper.state();
            expect( coponnentState.form[ 'title' ] ).toEqual( 'test' );
            const updatedInput = wrapper.find( 'input' );
            expect( updatedInput.props().value ).toEqual( 'test' );
            wrapper.setState( {
                form: { title : '', description: '' }
            } );
        } );
    } );

    describe( 'Reset button', () => {
        const btn = wrapper.find( '.reset' );
        
        it( 'renders the button', () => {
            expect( btn.exists() ).toBe( true );
            expect( btn.render().text() ).toEqual( 'Reset' );
        } );

         it( 'calls formReset onClick', () => {
            const event = { preventDefault: () => {} }
            wrapper.setState( {
                form: { title : 'test', description: 'test' }
            } );
            const coponnentState = wrapper.state();
            expect( coponnentState.form[ 'title' ] ).toEqual( 'test' );
            expect( coponnentState.form[ 'description' ] ).toEqual( 'test' );
            btn.simulate( 'click', event );
            const updatedState = wrapper.state();
            expect( updatedState.form[ 'title' ] ).toEqual( '' );
            expect( updatedState.form[ 'discription' ] ).toEqual( '' );
        } );
    } );

    describe( 'Submit button', () => {
        it( 'renders the button', () => {
            
            const btn = wrapper.find( '.submit' );
            expect( btn.exists() ).toBe( true );
            expect( btn.render().text() ).toEqual( 'Save' );
        } );

        describe( 'calls handleSubmit onClick ', () => {
            describe( 'show ', () => {
                it( 'error messages when there is no value in state', () => {
                    const btn = wrapper.find( '.submit' );
                    const event = { preventDefault: () => {} }
                    wrapper.setState( {
                        form: { title : '', discription: '' }
                    } );
                    btn.simulate( 'click', event );
                    const instance = wrapper.instance();
                    const validator = instance.validator;
                    expect( validator.allValid() ).toBe( false );
                    expect( wrapper.find( '.title_error' ).text() ).toEqual( 'The title field is required.' );
                    expect( wrapper.find( '.discription_error' ).text() ).toEqual( 'The discription field is required.' );
                } );

                it( 'sucess messages when there is input values in state', () => {
                    const onAddTodo = jasmine.createSpy( 'onAddTodo' ).and.returnValue( Promise.resolve( { id : 1, title: 'test' } ) );
                    wrapper = shallow( <TodoForm { ...props }  onAddTodo = { onAddTodo } /> );
                    const btn = wrapper.find( '.submit' );
                    const event = { preventDefault: () => {} }
                    wrapper.setState( {
                        form: { title : 'test', discription: 'test' }
                    } );
                    btn.simulate( 'click', event );
                    const instance = wrapper.instance();
                    const validator = instance.validator;
                    expect( validator.allValid() ).toBe( true );

                    setTimeout( () => {
                        const newState = wrapper.state();
                        expect( newState.successMsg ).toEqual( 'Your todo changes saved succesfully.' );
                        expect( wrapper.find( '.success' ).text() ).toEqual( 'Your todo changes saved succesfully.' );
                    }, 1500 );

                } );

                it( 'error message when return invalid response', () => {
                    const onAddTodo = jasmine.createSpy( 'onAddTodo' ).and.returnValue( Promise.resolve( {} ) );
                    wrapper = shallow( <TodoForm { ...props }  onAddTodo = { onAddTodo } /> );
                    const btn = wrapper.find( '.submit' );
                    const event = { preventDefault: () => {} }
                    wrapper.setState( {
                        form: { title : 'test', discription: 'test' }
                    } );
                    btn.simulate( 'click', event );
                    const instance = wrapper.instance();
                    const validator = instance.validator;
                    expect( validator.allValid() ).toBe( true );

                    setTimeout( () => {
                        const newState = wrapper.state();
                        expect( newState.errrorMsg ).toEqual( 'Something went wrong, please try later.' );
                        expect( wrapper.find( '.final_error' ).text() ).toEqual( 'Something went wrong, please try later.' );
                    }, 1500 );

                } );
            } );

        } );

    } );

} );
