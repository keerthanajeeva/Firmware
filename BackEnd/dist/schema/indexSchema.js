"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var query = require('./queriesSchema');
var mutation = require('./mutationsSchema');
module.exports = new graphql_1.GraphQLSchema({
    query: query,
    mutation: mutation
});
