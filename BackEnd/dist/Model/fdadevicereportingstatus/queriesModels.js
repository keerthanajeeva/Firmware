"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Reportingstatus = require('./fdadevicereportingstatusModels');
// Defines the queries
module.exports = {
    reportingstatus: {
        type: new graphql_1.GraphQLList(type),
        args: {
            DeviceId: {
                type: graphql_1.GraphQLString
            },
            packetsequenceno: {
                type: graphql_1.GraphQLString
            },
            imei: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: Reportingstatus.findMatching.bind(Reportingstatus)
    },
    fdadevicereportingstatus: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: Reportingstatus.getByID.bind(Reportingstatus)
    }
};
