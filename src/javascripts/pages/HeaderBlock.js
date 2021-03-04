import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
        activePage: 'home',
    };
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick( pageSlug ){
    this.setState( { activePage: pageSlug } );
  }

  render() {
    return (
        <div className="header">
            <Link to="/" className="logo">TestLogo</Link>
            <div className="header-right">
                <Link
                  className={ ( this.state.activePage === 'home' ) ? 'active': '' }
                  id="home"
                  onClick = { () => this.handleClick( 'home' ) }
                  to="/"
                >Home</Link>
                <Link
                  className={ ( this.state.activePage === 'about' ) ? 'active': '' }
                  id="about"
                  onClick = { () => this.handleClick( 'about' ) }
                  to="/about-us"
                >About Us</Link>
                <Link
                  className={ ( this.state.activePage === 'todo' ) ? 'active': '' }
                  id="todos"
                  onClick = { () => this.handleClick( 'todo' ) }
                  to="/todos"
                >Todo Section</Link>
            </div>
        </div>
    );
  }
}
