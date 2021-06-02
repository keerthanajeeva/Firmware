"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Devicemaster = require('./devicemasterModels');
// Defines the queries
module.exports = {
    devicemaster: {
        type: new graphql_1.GraphQLList(type),
        args: {
            DeviceID: {
                type: graphql_1.GraphQLInt
            },
            GPSDeviceID: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: Devicemaster.findMatching.bind(Devicemaster)
    },
    devicedMaster: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: Devicemaster.getByID.bind(Devicemaster)
    }
};
