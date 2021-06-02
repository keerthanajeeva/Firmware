import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean
} from'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Device = require('./devicetypeModels')

// Defines the queries
module.exports = {
devicetype: {
    type: new GraphQLList(type),
    args: {
        DeviceType: {
            type: GraphQLString
        },
        IsActive: {
            type: GraphQLBoolean
        }
    },
    resolve: Device.findMatching.bind(Device)
},
device: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Device.getByID.bind(Device)
}
}