import {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList
} from 'graphql'

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Device',
    description: 'a devicetype',
    fields: {
        ID: {
            type: new GraphQLNonNull(GraphQLID)
        },
        DeviceType: {
            type: new GraphQLNonNull(GraphQLString)
        },
        IsActive: {
            type: new GraphQLNonNull(GraphQLBoolean)
        }
    }
})