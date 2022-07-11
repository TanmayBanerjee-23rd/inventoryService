import express from "express";
import InventoriesRoutes from "./Inventories/router";
import HttpHelper from "./utilities/Helpers/httpResponse";

const app = express( );

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );

app.use( "/inventory", InventoriesRoutes );

function errorHandler( err, req, res, next ) {

    if ( res.headersSent ) {
        return next( err );
    }

    console.log( `error  :: --> Server errorHandler Function : ${ err.message }` );
    HttpHelper.sendAcknowledgement( res, 500, err );
};

app.use( errorHandler );

const server = app.listen( 10000 );

export default server;