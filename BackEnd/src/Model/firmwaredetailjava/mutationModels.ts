import { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'
const type = require('./type')
const DetailJava = require('./firmwaredetailjavaModels')

// Defines the mutations
module.exports = {
    addDetailJava: {
        type,
        args: {
            // ID: {
            //     type: new GraphQLNonNull(GraphQLInt)
            // },
            Name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            ServerIP: {
                type: new GraphQLNonNull(GraphQLString)
            },
            UserName:{
                type: new GraphQLNonNull(GraphQLString)
            },
            Password:{
                type:new GraphQLNonNull(GraphQLString)
            },
            FileSize:{
                type: new GraphQLNonNull(GraphQLInt)
            },
            FilePath:{
                type: new GraphQLNonNull(GraphQLString)
            },
            Port:{
                type: new GraphQLNonNull(GraphQLInt)
            },
            InsertUTC:{
                type: new GraphQLNonNull(GraphQLString)
            },
            UpdateUTC:{
                type: new GraphQLNonNull(GraphQLString)
            },
            IsActive: {
                type: new GraphQLNonNull(GraphQLBoolean)
            },
            ReleaseNotes:{
                type: new GraphQLNonNull(GraphQLString)
            },
            IsFirmware:{
                type:new GraphQLNonNull(GraphQLBoolean)
            },
            isSNM476:{
                type:new GraphQLNonNull(GraphQLBoolean)
            }    
            
        },
        resolve: DetailJava.createEntry.bind(DetailJava)
    },
    updateDetailJava: {
        type,
        args: {
            ID:     { type: GraphQLInt },
            Name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            FileSize:{
                type: new GraphQLNonNull(GraphQLInt)
            },
        },
        resolve: DetailJava.updateEntry.bind(DetailJava)
    }
}