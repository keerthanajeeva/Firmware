import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Devicepacketsummary=require('./fdadevicepacketsummaryModels')

// Defines the queries
module.exports = {
devicepacket: {
    type: new GraphQLList(type),
    args: {
        DeviceId: {
            type: GraphQLID
        },
        VIN: {
            type: GraphQLString
        },
        Customer:{type:GraphQLString},
    
    },
    resolve: Devicepacketsummary.findMatching.bind(Devicepacketsummary)
},
packetsummary: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Devicepacketsummary.getByID.bind(Devicepacketsummary)
}
}