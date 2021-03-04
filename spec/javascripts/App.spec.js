import { shallow } from 'enzyme';
import React from 'react';
import App from 'shop/App';
import Routes from 'shop/Routes';

import './helpers/enzyme-config';

describe( '<App /> ', () => {
    const wrapper = shallow( <App /> );
    it( ' renders a Routes  ', () => {
        expect( wrapper.find( Routes ).exists() ).toBe( true );
    } );
} );
