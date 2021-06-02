"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'customeraccountrelationship',
    description: 'a customeraccountrelationship',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        AccountName: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        fk_DealerId: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        fk_CustomerId: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        BSSID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        InsertUTC: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        }
    }
});
