const express = require( 'express' );
const app = express();
app.use( express.static( __dirname + '/public' ) );

const { 
    profilesController,
    profileController,
    profileSearchController
} = require( './controller' );

/* todos los perfiles */
app.get( '/api/compositoras', [ 
    profilesController
] );

/* perfil individual */
app.get( '/api/compositoras/:name', [ 
    profileController
] );  

/* buscador por nombre - no funciona, por algun motivo esta ruta usa el profileController */
app.get( '/api/compositoras/search', [ 
    profileSearchController
] );


app.listen( process.env.PORT || 8080);

