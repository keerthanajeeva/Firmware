const firmwaredetailcModels=require('./firmwaredetailCModels');
const firmwaredetailjavaModels=require('../firmwaredetailjava/firmwaredetailjavaModels');
const ctype=require('../firmwaredetailC/type')
const javatype=require('../firmwaredetailjava/type')
import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat
} from 'graphql'
module.exports = {
    
    detailCandjavatest: {
    type: new GraphQLList(ctype),
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
        },
        resolve: firmwaredetailcModels.findMatching.bind(firmwaredetailcModels),
        detailJava: {
            type: new GraphQLList(javatype),
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
                resolve: firmwaredetailjavaModels.findMatching.bind(firmwaredetailjavaModels),
        
    
    }
}
    }}}