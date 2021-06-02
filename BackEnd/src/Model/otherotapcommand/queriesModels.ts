import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Otherotapcommand = require('./otherotapcommandModels')

// Defines the queries
module.exports = {
    otherotapcommand: {
    type: new GraphQLList(type),
    args: {
        
        DeviceID: {
            type: new GraphQLList(GraphQLString)
        },
        
    Customer: {
        type: GraphQLString
    },
    NetworkProvider: {
        type: GraphQLString
    },
    MobileNo: {
        type: GraphQLInt
    },
    // VehicleTypeName: {
    //     type: GraphQLInt
    // },
    // CurrentCVersion: {
    //     type: GraphQLInt
    // },
    // CurrentJavaVersion: {
    //     type: GraphQLInt
    // },
    // Ignition: {
    //     type: GraphQLString
    // },
},
    resolve: Otherotapcommand.findMatching.bind(Otherotapcommand)
},

otapcommand: {
    type:new GraphQLList(type),
    args: {
        // DeviceID:new GraphQLList(GraphQLString)
        DeviceID: {
            type: GraphQLList(GraphQLString)
        },
        
        DeviceType:{
            type: GraphQLString
          }
         
    },
    resolve: Otherotapcommand.findMatching.bind(Otherotapcommand)
},
otapcommandDeviceID: {
    // type,
    type:new GraphQLList(type),
    args: {
        DeviceID: {
            type: new GraphQLList(GraphQLString)

        }
    },
    // resolve: Otherotapcommand.DeviceIDlist.bind(Otherotapcommand),
    resolve(parent:any,args:any){
        console.log(args);
        
        return Otherotapcommand.findMatching.bind(Otherotapcommand)

    }
    
},
// commandforotap:{
//     // type:new GraphQLList(type),
//     type,
//    args:{
//        DeviceID:{
//         type: new GraphQLList(GraphQLString)
//        }
//    }
// },
// resolve:Otherotapcommand.findbylist.bind(Otherotapcommand)
}