"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'customer',
    description: 'a customer',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        Name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        fk_CustomerTypeId: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        InsertUTC: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        UpdateUTC: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        IsActive: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean)
        },
        fk_OEMID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        ParentCustomerID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        CustomerCode: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        }
    }
});
