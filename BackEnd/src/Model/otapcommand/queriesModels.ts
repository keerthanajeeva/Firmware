import  { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Otapcommand = require('../otapcommand/otapcommandModels')

// Defines the queries
module.exports = {
    OtapCommand: {
    type: new GraphQLList(type),
    args:{
    PacketID:{
        type:GraphQLInt
    },
    // DeviceID: {
    //     type: GraphQLString
    // },
    // Name: {
    //     type: GraphQLString
    // },
    // Message: {
    //     type: GraphQLString
    // },
},
    resolve: Otapcommand.findMatching.bind(Otapcommand)
},
CommandOtap: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Otapcommand.getByID.bind(Otapcommand)
}
}