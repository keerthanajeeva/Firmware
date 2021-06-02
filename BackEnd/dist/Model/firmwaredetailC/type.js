"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'firmwaredetailc',
    description: 'detailC',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        Name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        ServerIP: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        UserName: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Password: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        FileSize: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        FilePath: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Port: {
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
        ReleaseNotes: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        }
    }
});
