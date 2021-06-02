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
    name: 'devicefirmwareinfo',
    description: 'info',
    fields: {
        ID: {
            type: new GraphQLNonNull(GraphQLID)
        },
        IPConfigured: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Port: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        fk_JavaFirmwareID:{
            type: new GraphQLNonNull(GraphQLInt)
        },
        fk_CFirmwareID:{
            type:new GraphQLNonNull(GraphQLInt)
        },
        InsertUTC:{
            type: new GraphQLNonNull(GraphQLString)
        },
        UpdateUTC:{
            type: new GraphQLNonNull(GraphQLString)
        },
        IsActive: {
            type: new GraphQLNonNull(GraphQLBoolean)
        }

    }
})