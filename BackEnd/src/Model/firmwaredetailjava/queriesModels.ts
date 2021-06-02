import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const DetailJava=require('./firmwaredetailjavaModels')

// Defines the queries
module.exports = {
    detailJava: {
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
        }
    
    },
    resolve: DetailJava.findMatching.bind(DetailJava)
},
firmwaredetailJava: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: DetailJava.getByID.bind(DetailJava)
},
// Javadetail:{
//     type: new GraphQLList(type),
//     args: {
//         Name: {
//             type: GraphQLString
//         },
//         ServerIP: {
//             type: GraphQLString
//         },
//         UserName:{
//             type: GraphQLString
//         },
//         Password:{
//             type:  GraphQLString
//         }
    
//     },
//     resolve: DetailJava.findAll.bind(DetailJava)
   
// }
}
// console.log("DetailJava",DetailJava.findAll())
