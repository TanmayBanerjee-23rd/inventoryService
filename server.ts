import express from "express";
import InventoriesRoutes from "./Inventories/router";

const app = express( );

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );

app.use( "/inventory", InventoriesRoutes );

const server = app.listen( 10000 );

export default server;