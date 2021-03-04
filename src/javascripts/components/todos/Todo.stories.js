import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row, Col } from 'react-bootstrap';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../assets/styles/style.css';

import Todo from './Todo';

const todo = { id: 1, title: 'title', description: 'desc' };

const actions = {
    deleteTodo: action( 'deleteTodo' ),
    editTodo: action( 'editTodo' ),
};

storiesOf( '<Todo>', module )
    .addDecorator( story => (
        <Container>
            <Row className="show-grid">
                <Col md={ 12 }>
                    {story()}
                </Col>
            </Row>
        </Container>
    ) )
    .add( 'render todo detail data', () => <Todo  todo={ todo } { ...actions } /> );
