import {
    mapStateToProps,
} from 'shop/containers/todoContainer';
import * as state from './../fixtures/state';

describe( '<todoContainer />', () => {
    describe( 'mapStateToProps', () => {
        it( 'maps todos to todos', () => {
            const props = mapStateToProps( state );
            expect( props.todos ).toEqual( state.todoList );
        } );
    } );
} );
