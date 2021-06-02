import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const DetailC=require('./firmwaredetailCModels')
// const dbqueries=require('./dbqueries')
// console.log("detailc",DetailC);
const javatype=require('../firmwaredetailjava/type')
const Javadetail=require("../firmwaredetailjava/firmwaredetailjavaModels")


// Defines the queries
module.exports = {
    
    detailC: {
    type: new GraphQLList(type),
    args: {
        Name: {
            type: GraphQLString
        },
        ServerIP: {
            type: GraphQLString
        },
        UserName:{
            type: GraphQLString
        },
        Password:{
            type:  GraphQLString
        },
        IsFirmware:{
            type:GraphQLBoolean
        }
        
    
    },
    resolve: DetailC.findMatching.bind(DetailC)
},
firmwaredetailC: {
 type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: DetailC.getByID.bind(DetailC)
},
Javadetail: {
    type: new GraphQLList(javatype),
    // types: new GraphQLList(type),
    args: {
        Name: {
            type: GraphQLString
        },
        ServerIP: {
            type: GraphQLString
        },
        UserName:{
            type: GraphQLString
        },
        Password:{
            type:  GraphQLString
        },
        IsFirmware:{
            type:GraphQLBoolean
        }
    
    },
    resolve: Javadetail.findMatching.bind(Javadetail),
    // reolve:DetailC.findMatching.bind(DetailC)

}
}
// console.log("cdetail",cdetail);
