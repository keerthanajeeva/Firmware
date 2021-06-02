"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// Defines the type
module.exports = new graphql_1.GraphQLObjectType({
    name: 'fdadevicereportingstatus',
    description: 'a reporting status',
    fields: {
        ID: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        DeviceId: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        packetsequenceno: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        imei: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        LastReportedPacket: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        msg_sl_no: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Pfreqency: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        LastReportedDate: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        TimestampLocal: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        PublishUTC: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        lat: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        lon: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        altitude: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        heading: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        gpsspeed: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        no_of_satellites: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        location: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        gpsodometer: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        AvgAccelerometerX: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        AvgAccelerometerY: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        AvgAccelerometerZ: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        fw_ver: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        vehicle_type: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        vehicle_type_description: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        VIN: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        SubscriptionEndDate: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Elevation: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Frequency_from_W: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        ign_status: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        vehicle_battery_potential: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        obu_batt_volt: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        fuellevel: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        device_fuel_level: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        wheel_based_speed: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        enginespeed: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        device_engine_speed: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        enginecoolanttemperature: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        FuelConsumption: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        ThrottlePosition: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Engine_Torque: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        EngineHours: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        FrictionalTorque: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        engine_oil_pressure: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        ClutchSwitch: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        BrakeSwitch: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        VehicleDistance: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        EngineOilTemperature: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        EngineIntakePressure_1: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        EngineIntakeTemperature_1: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        EngineAirInletPressure: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        BarometricPressure: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        EngineFuelTemperature_1: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        DriversDemandEnginePercentTorque: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        BatteryChargingCurrent: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        AirPressure_1: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        AirPressure_2: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        DistanceToEmpty: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        GSASCompliance: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        AirPressureDigital: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        OilPressureDigital: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        gsm_signal: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        alertid: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        Silent: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
        ReportGeneratedDate: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
        },
    }
});
