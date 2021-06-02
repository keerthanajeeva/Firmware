"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'devicefirmwareinfo',
    description: 'info',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        IPConfigured: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Port: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        fk_JavaFirmwareID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        fk_CFirmwareID: {
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
        }
    }
});
