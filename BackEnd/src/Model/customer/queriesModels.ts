import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql';
const type = require('./type')
// const mutation = require('./mutations')
const Customertype = require('./customerModels')

// Defines the queries
module.exports = {
    customer: {
    type: new GraphQLList(type),
    args: {
        Name: {
            type:GraphQLString
        },
        fk_CustomerTypeId: {
            type: GraphQLInt
        },
        InsertUTC:{
            type: GraphQLString
        },
        UpdateUTC:{
            type: GraphQLString
        },
        IsActive:{
            type: GraphQLBoolean
        },
        fk_OEMID:{
            type: GraphQLInt
        },
        ParentCustomerID:{
            type: GraphQLInt
        },
        CustomerCode:{
            type: GraphQLString
        }
    },
    resolve: Customertype.findMatching.bind(Customertype)
},
Customers: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Customertype.getByID.bind(Customertype)
}
}