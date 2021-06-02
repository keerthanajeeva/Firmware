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
const Otapcommand = require('./otapcommandModels')

// Defines the mutations
module.exports = {
    addotapcommand: {
        type,
        args: {
            
            PacketID:{ type: new GraphQLNonNull(GraphQLInt) },
            DeviceType:{ type: new GraphQLNonNull(GraphQLString) },
            CommandName:{ type: new GraphQLNonNull(GraphQLString) },
            MessageFormat:{ type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: Otapcommand.createEntry.bind(Otapcommand)
    },
    updateotapcommand: {
        type,
        args: {
            ID:     { type: GraphQLInt },
        },
        resolve: Otapcommand.updateEntry.bind(Otapcommand)
    }
}