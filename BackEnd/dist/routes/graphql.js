"use strict";
var graphqlHTTP = require('express-graphql').graphqlHTTP;
var router = require('express').Router();
var schema = require('../schema/indexSchema');
// const fdadevicepacketsummary=require('../schema/dashboardSchema/indexSchema')
router.get('/', graphqlHTTP({
    schema: schema,
    // fdadevicepacketsummary,
    graphiql: true
}));
router.post('/', graphqlHTTP({
    schema: schema,
    // fdadevicepacketsummary,
    graphiql: false,
    // attributes: {
    //     propertyName: { type:"string", required:true, unique: true }
    //   },
    //   autoPK:false
}));
module.exports = router;
