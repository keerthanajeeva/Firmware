"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Devicepacketsummary = require('./fdadevicepacketsummaryModels');
// Defines the queries
module.exports = {
    devicepacket: {
        type: new graphql_1.GraphQLList(type),
        args: {
            DeviceId: {
                type: graphql_1.GraphQLID
            },
            VIN: {
                type: graphql_1.GraphQLString
            },
            Customer: { type: graphql_1.GraphQLString },
        },
        resolve: Devicepacketsummary.findMatching.bind(Devicepacketsummary)
    },
    packetsummary: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: Devicepacketsummary.getByID.bind(Devicepacketsummary)
    }
};
