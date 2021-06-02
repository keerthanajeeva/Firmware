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
    name: 'Devicepacketsummary',
    description: 'a packetsummary',
    fields: {
        ID: {
            type: new GraphQLNonNull(GraphQLID)
        },
        DeviceId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        VIN: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Customer:{
            type: new GraphQLNonNull(GraphQLString)
        },
        VehicleType:{
            type: new GraphQLNonNull(GraphQLString)
        },
        TankCapacity:{
            type:new GraphQLNonNull(GraphQLFloat)  
        },
        fk_GroupClusterID:{
            type:new GraphQLNonNull(GraphQLID)
        },
        StartDate:{type:new GraphQLNonNull(GraphQLString)},
        EndDate:{type:new GraphQLNonNull(GraphQLString)},
        TriggerFlag:{type:new GraphQLNonNull(GraphQLString)},
        PlantName:{type:new GraphQLNonNull(GraphQLString)},
        fw_version:{type:new GraphQLNonNull(GraphQLString)},
        Total:{type:new GraphQLNonNull(GraphQLInt)},
        D0:{type:new GraphQLNonNull(GraphQLInt)},
        D:{type:new GraphQLNonNull(GraphQLInt)},
        P:{type:new GraphQLNonNull(GraphQLInt)},
        A:{type:new GraphQLNonNull(GraphQLInt)},
        V:{type:new GraphQLNonNull(GraphQLInt)},
        F0:{type:new GraphQLNonNull(GraphQLInt)},
        FD:{type:new GraphQLNonNull(GraphQLInt)},
        FE:{type:new GraphQLNonNull(GraphQLInt)},
        FF:{type:new GraphQLNonNull(GraphQLInt)},
        Published:{type:new GraphQLNonNull(GraphQLInt)},
        NotPublished:{type:new GraphQLNonNull(GraphQLInt)},
        D0_NotPublished:{type:new GraphQLNonNull(GraphQLInt)},
        D0_Published:{type:new GraphQLNonNull(GraphQLInt)},
        F0_NotPublished:{type:new GraphQLNonNull(GraphQLInt)},
        F0_Published:{type:new GraphQLNonNull(GraphQLInt)},
        E0_NotPublished:{type:new GraphQLNonNull(GraphQLInt)},
        E0_Published:{type:new GraphQLNonNull(GraphQLInt)},
        E5_NotPublished:{type:new GraphQLNonNull(GraphQLInt)},
        E5_Published:{type:new GraphQLNonNull(GraphQLInt)},
        Pfreqency:{type:new GraphQLNonNull(GraphQLString)},
        lat:{type:new GraphQLNonNull(GraphQLString)},
        location:{type:new GraphQLNonNull(GraphQLString)},
        VehicleBatteryPotential:{type:new GraphQLNonNull(GraphQLString)},
        ObuBattVolt:{type:new GraphQLNonNull(GraphQLString)},
        lons:{type:new GraphQLNonNull(GraphQLString)},
        Silent:{type:new GraphQLNonNull(GraphQLInt)},
        LastReportedDate:{type:new GraphQLNonNull(GraphQLString)},
        DaysPastStartDate:{type:new GraphQLNonNull(GraphQLInt)},
        DeviceStatus:{type:new GraphQLNonNull(GraphQLString)},
        ageing:{type:new GraphQLNonNull(GraphQLString)},
        ReportGeneratedDate:{type:new GraphQLNonNull(GraphQLInt)}
    }

})