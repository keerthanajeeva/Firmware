"use strict";
var graphql = require('./graphql');
// const dashboard=require('./graphql')
module.exports = /** @class */ (function () {
    /**
     * Applies the routes to specific paths
     * @param {*} app - The instance of express which will be serving requests.
     */
    function Routes(app) {
        //Throws if no instance of express was passed
        if (app == null)
            throw new Error("You must provide an instance of express");
        //Registers the base GraphQLi base endpoint
        app.use('/graphql', graphql);
        // app.use('/dashboards',dashboard)
    }
    return Routes;
}());
