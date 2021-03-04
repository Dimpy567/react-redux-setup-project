import { connect } from 'react-redux';
import {
    addTodo,
    deleteTodo,
    setTodoList
} from './../thunks/';
import Todo from './../components/todos/';
import {
    getTodoList
} from '../selectors/';

export function mapStateToProps( state ) {
    return {
        todos: getTodoList( state )
    };
}

export function mapDispatchToProps( dispatch ) {
    return {
        onAddTodo: data => dispatch( addTodo( data ) ),
        onDeleteTodo: id => dispatch( deleteTodo( id ) ),
        onSetTodoList: () => dispatch( setTodoList() )
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Todo );
