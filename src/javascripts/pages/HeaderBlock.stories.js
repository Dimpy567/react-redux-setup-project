import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row, Col } from 'react-bootstrap';
import { MemoryRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/styles/style.css';

import Header from './HeaderBlock';

storiesOf( '<Header>', module )
    .addDecorator( story => (
        <Container>
            <MemoryRouter>
                <Row className="show-grid">
                    <Col md={ 12 }>
                        {story()}
                    </Col>
                </Row>
            </MemoryRouter>
        </Container>
    ) )
    .add( 'render header by default', () => <Header /> );
