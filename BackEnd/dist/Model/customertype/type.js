"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'customertype',
    description: 'a customertype',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        CustomerType: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        IsActive: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean)
        }
    }
});
