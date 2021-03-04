import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row, Col } from 'react-bootstrap';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../assets/styles/style.css';

import TodoForm from './TodoForm';

const todo = { id: 1, title: 'title', discription: 'desc' };

const actions = {
    onAddTodo: action( 'onAddTodo' ),
};

storiesOf( '<TodoForm>', module )
    .addDecorator( story => (
        <Container>
            <Row className="show-grid">
                <Col md={ 12 }>
                    {story()}
                </Col>
            </Row>
        </Container>
    ) )
    .add( 'render form when add todo', () => <TodoForm  todo={ {} } { ...actions } /> )
    .add( 'render form when edit todo', () => <TodoForm  todo={ todo } { ...actions } /> );
