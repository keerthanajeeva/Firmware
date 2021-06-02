"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Otherotapcommand = require('./otherotapcommandModels');
// Defines the queries
module.exports = {
    otherotapcommand: {
        type: new graphql_1.GraphQLList(type),
        Customer: {
            type: graphql_1.GraphQLString
        },
        NetworkProvider: {
            type: graphql_1.GraphQLString
        },
        MobileNo: {
            type: graphql_1.GraphQLInt
        },
        // VehicleTypeName: {
        //     type: GraphQLInt
        // },
        // CurrentCVersion: {
        //     type: GraphQLInt
        // },
        // CurrentJavaVersion: {
        //     type: GraphQLInt
        // },
        // Ignition: {
        //     type: GraphQLString
        // },
        resolve: Otherotapcommand.findMatching.bind(Otherotapcommand)
    },
    otapcommand: {
        type: new graphql_1.GraphQLList(type),
        args: {
            DeviceID: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: Otherotapcommand.findMatching.bind(Otherotapcommand)
    }
};
