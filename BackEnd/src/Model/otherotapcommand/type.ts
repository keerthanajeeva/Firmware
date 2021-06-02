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
    name: 'Otherotapcommand',
    description: 'a otherotapcommand',
    fields:() =>({
        // args:{
        //     DeviceID:new GraphQLNonNull(GraphQLString)
        // },
        DeviceID: {
            type: new GraphQLNonNull(GraphQLString)
        },
        DeviceType: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Customer: {
            type: new GraphQLNonNull(GraphQLString)
        },
        NetworkProvider: {
            type: new GraphQLNonNull(GraphQLString)
        },
        MobileNo: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        Model:{
            type: new GraphQLNonNull(GraphQLString)
        },
        VehicleTypeName: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        CurrentCVersion: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        CurrentJavaVersion: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        Ignition: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})