import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row, Col } from 'react-bootstrap';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../assets/styles/style.css';
import TodoList from './TodoList';

const todos =[
    { id: 1, title: 'title', description: 'desc' },
    { id: 2, title: 'title 1', description: 'description 1' },
];

const actions = {
    deleteTodo: action( 'deleteTodo' ),
    editTodo: action( 'editTodo' ),
};

storiesOf( '<TodoList>', module )
    .addDecorator( story => (
        <Container>
            <Row className="show-grid">
                <Col md={ 12 }>
                    {story()}
                </Col>
            </Row>
        </Container>
    ) )
    .add( 'render if no data found', () => <TodoList  todos={ [] } { ...actions } /> )
    .add( 'render todoList', () => <TodoList  todos={ todos } { ...actions } /> );
