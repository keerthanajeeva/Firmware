"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Deviceinfo = require('./devicefirmwareinfoModels');
// Defines the queries
module.exports = {
    deviceInfo: {
        type: new graphql_1.GraphQLList(type),
        args: {
            ID: {
                type: graphql_1.GraphQLID
            },
            IPConfigured: {
                type: graphql_1.GraphQLString
            },
            Port: {
                type: graphql_1.GraphQLInt
            }
        },
        resolve: Deviceinfo.findMatching.bind(Deviceinfo)
    },
    devicefirmwareinfo: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: Deviceinfo.getByID.bind(Deviceinfo)
    }
};
