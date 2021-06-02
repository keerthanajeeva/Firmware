"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'otapcommand',
    description: 'a otapcommand',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        PacketID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        DeviceID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Message: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
    }
});
