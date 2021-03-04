import { shallow } from 'enzyme';
import React from 'react';
import About from 'shop/pages/AboutPage';

import './../helpers/enzyme-config';

describe( '<About page /> ', () => {
    const wrapper = shallow( <About /> );
    const p = wrapper.find( 'p' );
    it( ' renders a p element  ', () => {
        expect( p.exists() ).toBe( true );
        expect( p.text() ).toEqual( 'This is about us page.' );
    } );

} );
