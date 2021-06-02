import {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt
} from 'graphql'

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'customer',
    description: 'a customer',
    fields: {
        ID: {
            type: new GraphQLNonNull(GraphQLID)
        },
        Name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        fk_CustomerTypeId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        InsertUTC:{
            type: new GraphQLNonNull(GraphQLString)
        },
        UpdateUTC:{
            type: new GraphQLNonNull(GraphQLString)
        },
        IsActive:{
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        fk_OEMID:{
            type: new GraphQLNonNull(GraphQLInt)
        },
        ParentCustomerID:{
            type: new GraphQLNonNull(GraphQLInt)
        },
        CustomerCode:{
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})