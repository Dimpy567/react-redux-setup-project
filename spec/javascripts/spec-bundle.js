const context = require.context( './', true, /\.spec\.js$/ );
context.keys().forEach( key => describe( `[${ key }]`, () => context( key ) ) );
