import {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt} from'graphql'

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'firmwaredetailc',
    description: 'detailC',
    fields:()=>({
        ID: {
            type: new GraphQLNonNull(GraphQLInt)
        },
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

    })
})