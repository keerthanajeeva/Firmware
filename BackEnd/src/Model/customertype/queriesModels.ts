import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Customertype = require('./customertypeModels')

// Defines the queries
module.exports = {
    customertype: {
    type: new GraphQLList(type),
    args: {
        CustomerType: {
            type: GraphQLString
        },
        IsActive: {
            type: GraphQLBoolean
        }
    },
    resolve: Customertype.findMatching.bind(Customertype)
},
customer: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Customertype.getByID.bind(Customertype)
}
}