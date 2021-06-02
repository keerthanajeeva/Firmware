import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const customeraccountrelationship  = require('./customeraccountrelationshipModels')

// Defines the queries
module.exports = {
    customeraccountrelationship: {
    type: new GraphQLList(type),
    args: {
        AccountName: {
            type: GraphQLString
        },
        fk_DealerId: {
            type: GraphQLInt
        },
        fk_CustomerId:{
            type: GraphQLInt
        },
        BSSID:{
            type: GraphQLString
        },
        InsertUTC:{
            type: GraphQLString
        }
    },
    resolve: customeraccountrelationship.findMatching.bind(customeraccountrelationship)
},
accountrelationship: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: customeraccountrelationship.getByID.bind(customeraccountrelationship)
}
}