
import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Reportingstatus = require('./fdadevicereportingstatusModels')

// Defines the queries
module.exports = {
    reportingstatus: {
    type: new GraphQLList(type),
    args: {
        DeviceId: {
            type: GraphQLString
        },
        packetsequenceno: {
            type: GraphQLString
        },
        imei:{
            type: GraphQLString
        }
    },
    resolve: Reportingstatus.findMatching.bind(Reportingstatus)
},
fdadevicereportingstatus: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Reportingstatus.getByID.bind(Reportingstatus)
}
}