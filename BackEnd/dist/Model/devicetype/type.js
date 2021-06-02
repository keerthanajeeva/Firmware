"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'Device',
    description: 'a devicetype',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        DeviceType: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        IsActive: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean)
        }
    }
});
