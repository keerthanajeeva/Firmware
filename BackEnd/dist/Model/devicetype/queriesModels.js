"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Device = require('./devicetypeModels');
// Defines the queries
module.exports = {
    devicetype: {
        type: new graphql_1.GraphQLList(type),
        args: {
            DeviceType: {
                type: graphql_1.GraphQLString
            },
            IsActive: {
                type: graphql_1.GraphQLBoolean
            }
        },
        resolve: Device.findMatching.bind(Device)
    },
    device: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: Device.getByID.bind(Device)
    }
};
