import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import React from 'react';
import Header from 'shop/pages/HeaderBlock';

import './../helpers/enzyme-config';

describe( '<Header /> ', () => {
    describe( 'renders ', () => {
        const wrapper = shallow( <Header /> );
        it( 'Links ', () => {
            const nav = wrapper.find( Link );
            expect( nav.exists() ).toBe( true );
            expect( nav.length ).toEqual( 4 );
        } );

        it( 'logo text', () => {
            const logo = wrapper.find( '.logo' );
            expect( logo.text() ).toEqual( 'TestLogo' );
        } );

        it( '  Home link   ', () => {
            const nav = wrapper.find( '#home' );
            expect( nav.text() ).toEqual( 'Home' );
            expect( nav.prop( 'to' ) ).toEqual( '/' );
        } );

        it( '  About link   ', () => {
            const nav = wrapper.find( '#about' );
            expect( nav.text() ).toEqual( 'About Us' );
            expect( nav.prop( 'to' ) ).toEqual( '/about-us' );
        } );

        it( '  Todos link   ', () => {
            const nav = wrapper.find( '#todos' );
            expect( nav.text() ).toEqual( 'Todo Section' );
            expect( nav.prop( 'to' ) ).toEqual( '/todos' );
        } );

    } );
} );

describe( 'handleClick', () => {
    it( 'should call setState on pageSlug', () => {
        const wrapper = shallow( <Header /> );
        const expected = {
            activePage: 'about',
        };
        wrapper.instance().handleClick( 'about' );
        const nav = wrapper.find( '#about' );
        expect( wrapper.state() ).toEqual( expected );
        expect( nav.prop( 'className' ) ).toEqual( 'active' );
    } );
} );
