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
    name: 'customeraccountrelationship',
    description: 'a customeraccountrelationship',
    fields: {
        ID: {
            type: new GraphQLNonNull(GraphQLID)
        },
        AccountName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        fk_DealerId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        fk_CustomerId:{
            type: new GraphQLNonNull(GraphQLInt)
        },
        BSSID:{
            type: new GraphQLNonNull(GraphQLString)
        },
        InsertUTC:{
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})