import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Routes from 'shop/Routes';
import Home from 'shop/pages/HomePage';
import About from 'shop/pages/AboutPage';
import NoMatch from 'shop/pages/NotFoundPage';

import './helpers/enzyme-config';

describe( '<App /> ', () => {
    describe( ' landing on  ', () => {
        it( 'home page when root path(/) found', () => {
            const wrapper =  mount( <MemoryRouter initialEntries={ [ '/'  ] }>
                <Routes />
            </MemoryRouter> );
            expect( wrapper.find( Home ).length ).toEqual( 1 );
            expect( wrapper.find( NoMatch ).length ).toEqual( 0 );
        } );

        it( 'about Us page when /about-us path found', () => {
            const wrapper =  mount( <MemoryRouter initialEntries={ [ '/about-us'  ] }>
                <Routes />
            </MemoryRouter> );
            expect( wrapper.find( About ).length ).toEqual( 1 );
            expect( wrapper.find( NoMatch ).length ).toEqual( 0 );
        } );

        it( '404 page when invalid path found', () => {
            const wrapper =  mount( <MemoryRouter initialEntries={ [ '/unknown', '/invalid'  ] }>
                <Routes />
            </MemoryRouter> );
            expect( wrapper.find( About ).length ).toEqual( 0 );
            expect( wrapper.find( Home ).length ).toEqual( 0 );
            expect( wrapper.find( NoMatch ).length ).toEqual( 1 );
        } );

    } );
} );
