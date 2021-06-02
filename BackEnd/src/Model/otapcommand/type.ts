import {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt
} from 'graphql'

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'otapcommand',
    description: 'a otapcommand',
    fields: {
        ID:{
            type: new GraphQLNonNull(GraphQLInt)
        },
        PacketID: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        DeviceType: {
            type: new GraphQLNonNull(GraphQLString)
        },
        CommandName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        MessageFormat: {
            type: new GraphQLNonNull(GraphQLString)
        },
      
    }
})