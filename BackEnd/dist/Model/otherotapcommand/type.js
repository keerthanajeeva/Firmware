"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'Otherotapcommand',
    description: 'a otherotapcommand',
    fields: {
        DeviceID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        DeviceType: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Customer: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        NetworkProvider: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        MobileNo: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        Model: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        VehicleTypeName: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        CurrentCVersion: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        CurrentJavaVersion: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        Ignition: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        }
    }
});
