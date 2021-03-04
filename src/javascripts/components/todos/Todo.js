import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleTodo extends Component {
    render() {
        return (
            <div className="post">
                <h2  className="post_title">{this.props.todo.title}</h2>
                <p className="post_message">{this.props.todo.description}</p>
                <div className="control-buttons">
                    <button
                        className="edit btn btn-success"
                        onClick = { () => this.props.editTodo( this.props.todo ) }
                    >Edit</button>
                    <button
                        className="delete btn btn-danger"
                        onClick = { () => this.props.deleteTodo( this.props.todo.id ) }
                    >Delete</button>
                </div>
            </div>
        );
    }
}
export default SingleTodo;

SingleTodo.propTypes = {
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
    todo: PropTypes.object.isRequired
}
