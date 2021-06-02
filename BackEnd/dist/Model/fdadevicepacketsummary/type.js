"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'Devicepacketsummary',
    description: 'a packetsummary',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        DeviceId: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        VIN: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Customer: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        VehicleType: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        TankCapacity: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat)
        },
        fk_GroupClusterID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        StartDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        EndDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        TriggerFlag: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        PlantName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        fw_version: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        Total: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        D0: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        D: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        P: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        A: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        V: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        F0: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        FD: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        FE: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        FF: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        Published: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        NotPublished: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        D0_NotPublished: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        D0_Published: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        F0_NotPublished: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        F0_Published: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        E0_NotPublished: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        E0_Published: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        E5_NotPublished: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        E5_Published: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        Pfreqency: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        lat: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        location: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        VehicleBatteryPotential: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        ObuBattVolt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        lons: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        Silent: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        LastReportedDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        DaysPastStartDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        DeviceStatus: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        ageing: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        ReportGeneratedDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) }
    }
});
