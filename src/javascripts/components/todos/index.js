import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import TodoList from './TodoList'; 

class Todos extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            todo: {},
        };
        this.editTodo = this.editTodo.bind( this );
    }

    componentDidMount() {
        this.props.onSetTodoList();
    }

    editTodo( data ) {
        this.setState( { todo:data } );
    }

    render() {
        return (
            <div className="App">
                <TodoForm
                    todo = { this.state.todo }
                    onAddTodo = { this.props.onAddTodo }
                />
                <TodoList
                    todos = { this.props.todos }
                    editTodo = { ( data ) => this.editTodo( data ) }
                    deleteTodo = { this.props.onDeleteTodo }
                />
            </div>
        );
    }
}
export default Todos;

Todos.propTypes = {
    onAddTodo: PropTypes.func,
    onDeleteTodo: PropTypes.func,
    onSetTodoList: PropTypes.func,
    todos: PropTypes.array.isRequired
}
