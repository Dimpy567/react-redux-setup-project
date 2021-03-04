import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h2>404</h2>
                <h3>Go to home</h3>
                <p><Link to ="/">Go to home</Link></p>
            </div>
        );
    }
}
