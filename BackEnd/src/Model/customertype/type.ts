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
    name: 'customertype',
    description: 'a customertype',
    fields: {
        ID: {
            type: new GraphQLNonNull(GraphQLID)
        },
        CustomerType: {
            type: new GraphQLNonNull(GraphQLString)
        },
        IsActive: {
            type: new GraphQLNonNull(GraphQLBoolean)
        }
    }
})