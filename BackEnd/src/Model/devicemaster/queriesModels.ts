import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Devicemaster=require('./devicemasterModels')

// Defines the queries
module.exports = {
    devicemaster: {
    type: new GraphQLList(type),
    args: {
        DeviceID: {
            type: GraphQLInt
        },
        GPSDeviceID: {
            type: GraphQLString
        }
    
    },
    resolve: Devicemaster.findMatching.bind(Devicemaster)
},
devicedMaster: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Devicemaster.getByID.bind(Devicemaster)
}
}