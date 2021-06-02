"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
var Device = require('./devicetypeModels');
// Defines the mutations
module.exports = {
    addDevice: {
        type: type,
        args: {
            DeviceType: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            IsActive: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
        },
        resolve: Device.createEntry.bind(Device)
    },
    updateDevice: {
        type: type,
        args: {
            ID: { type: graphql_1.GraphQLID },
            DeviceType: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            IsActive: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
        },
        resolve: Device.updateEntry.bind(Device)
    }
};
