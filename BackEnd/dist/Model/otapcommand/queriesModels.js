"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Otapcommand = require('./otapcommandModels.js');
// Defines the queries
module.exports = {
    OtapCommand: {
        type: new graphql_1.GraphQLList(type),
        PacketID: {
            type: graphql_1.GraphQLInt
        },
        // DeviceID: {
        //     type: GraphQLString
        // },
        // Name: {
        //     type: GraphQLString
        // },
        // Message: {
        //     type: GraphQLString
        // },
        resolve: Otapcommand.findMatching.bind(Otapcommand)
    },
    CommandOtap: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: Otapcommand.getByID.bind(Otapcommand)
    }
};
