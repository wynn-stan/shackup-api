/**
 * This file sets up our server, makes sure that is up and running so we can make requests for webpages.
 * This file makes sure we can access the different pages in our web app 
 * 
 * set up global variables used by different processes
 * set up access to environment variables
 * set up server and run it
 * set up routing for the different endpoints "/", "/public", "/dev", "/data"
 */

//#region - setup global variables used by different processes.
const app = require('express')();

//#region - set up access to environment variables
function setupEnvironmentVariables(){
    require('dotenv').config();
}

setupEnvironmentVariables();

//#endregion

//#region - set up routing and handling of different pages 
// make and array of objects, each having a get route and a get handler

const get_routes_and_handlers = [
    {
        route: "/",
        handler: (req, res) => {
            res.sendFile("./src/public/html/home.html");
        }
    }
];

function setupRoutingAndHandlingUsingExpressApp(expressApp, get_routes_and_handlers){
    get_routes_and_handlers.foreach(
        (element) => {
            expressApp.get(element.route, element.handler);
        }
    )
}

setupRoutingAndHandlingUsingExpressApp(app, get_routes_and_handlers);

//#region - set up server using expressApp and run 
function setupServerUsingApp(app){
    //server should listen to [port] for requests
    app.listen(
        process.env.PORT, () => {
            console.log(`listening on Port ${process.env.PORT}`);
        }
    );
}

setupServerUsingApp(app);

