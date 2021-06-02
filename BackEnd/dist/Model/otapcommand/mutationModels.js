"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
var Otapcommand = require('./otapcommandModels');
// Defines the mutations
module.exports = {
    addotapcommand: {
        type: type,
        args: {
            PacketID: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
            DeviceID: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            Name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            Message: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
        },
        resolve: Otapcommand.createEntry.bind(Otapcommand)
    },
    updateotapcommand: {
        type: type,
        args: {
            ID: { type: graphql_1.GraphQLInt },
        },
        resolve: Otapcommand.updateEntry.bind(Otapcommand)
    }
};
