import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import React from 'react';
import NotFound from 'shop/pages/NotFoundPage';

import './../helpers/enzyme-config';

describe( '<NotFound page /> ', () => {
    const wrapper = shallow( <NotFound /> );
    it( ' renders a h2 element  ', () => {
        const h2 = wrapper.find( 'h2' );
        expect( h2.exists() ).toBe( true );
        expect( h2.text() ).toEqual( '404' );
    } );

    it( ' renders a h3 element  ', () => {
        const h3 = wrapper.find( 'h3' );
        expect( h3.exists() ).toBe( true );
        expect( h3.text() ).toEqual( 'Go to home' );
    } );

    it( ' render a Link  ', () => {
        expect( wrapper.find( Link ).exists() ).toBe( true );
        expect( wrapper.find( Link ).text() ).toEqual( 'Go to home' );
    } );

} );
