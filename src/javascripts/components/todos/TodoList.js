import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">All Todo</h1> {( this.props.todos.length > 0 ) ? (
                    <div>
                        {this.props.todos.map( ( todo ) => (
                            <Todo
                            deleteTodo = { this.props.deleteTodo }
                            key={ todo.id }
                            editTodo = { this.props.editTodo }
                            todo={ todo }
                        />
                    ) )}
                    </div>
                ) : ( <p className = " alert alert-danger"> No record found</p> ) }
            </div>
        );
    }
}

export default TodoList;

TodoList.propTypes = {
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
    todos: PropTypes.array.isRequired
}
