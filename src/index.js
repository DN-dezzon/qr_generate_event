const eventrouter = require( "./app/router" );
require('./app/utils/database');

module.exports = ( app ) => {
    app.use( "/program", eventrouter );
};
