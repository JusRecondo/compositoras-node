const express = require( 'express' );
const app = express();
app.use( express.static( __dirname + '/public' ) );

const { 
    profilesController,
    profileController
} = require( './controller' );

/* todos los perfiles - búsqueda por nombre*/
app.get( '/api/compositoras', [ 
    profilesController
] );

/* perfil individual */
app.get( '/api/compositoras/:id', [ 
    profileController
] );  


app.listen( process.env.PORT || 8080);

