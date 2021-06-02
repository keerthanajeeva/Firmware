import {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt} from 'graphql'

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'devicemaster',
    description: 'master',
    fields: {
        DeviceID: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        GPSDeviceID: {
            type: new GraphQLNonNull(GraphQLString)
        },
        InsertUTC:{
            type: new GraphQLNonNull(GraphQLString)
        },
        UpdateUTC:{
            type: new GraphQLNonNull(GraphQLString)
        },
        fk_FirmwareInfoID: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        fk_DeviceTypeID:{
            type: new GraphQLNonNull(GraphQLInt)
        },
        fk_NetworkProviderID:{
            type: new GraphQLNonNull(GraphQLInt)
        },
    }
})