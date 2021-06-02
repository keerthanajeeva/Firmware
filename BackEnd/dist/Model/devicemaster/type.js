"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'devicemaster',
    description: 'master',
    fields: {
        DeviceID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        GPSDeviceID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        InsertUTC: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        UpdateUTC: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        fk_FirmwareInfoID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        fk_DeviceTypeID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        fk_NetworkProviderID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
    }
});
