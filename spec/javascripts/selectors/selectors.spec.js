import * as selectors from 'shop/selectors/';
import * as state from './../fixtures/state';

describe( 'getTodoList', () => {
    it( 'should return the value from the state', () => {
        const todos = [
        {
          'title': 'test title 1',
          'description': 'test description 1',
          'id': 1
        },
        {
          'title': 'test title 2',
          'description': 'test description 3',
          'id': 2
        }
        ]
        expect( selectors.getTodoList( { todoList: state.todoList } ), ).toEqual( todos );
    } );
} );
