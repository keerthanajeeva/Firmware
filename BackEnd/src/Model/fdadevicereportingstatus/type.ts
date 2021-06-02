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
    name: 'fdadevicereportingstatus',
    description: 'a reporting status',
    fields: {
        ID: {
            type: new GraphQLNonNull(GraphQLID)
        },
        DeviceId: {
            type: new GraphQLNonNull(GraphQLString)
        },
        packetsequenceno: {
            type: new GraphQLNonNull(GraphQLString)
        },
        imei:{
            type: new GraphQLNonNull(GraphQLString)
        },
        LastReportedPacket:{
            type: new GraphQLNonNull(GraphQLString)
        }, 
        msg_sl_no:{
            type: new GraphQLNonNull(GraphQLString)
        },  
        Pfreqency:{
            type: new GraphQLNonNull(GraphQLString)
        },  
        LastReportedDate:{
            type: new GraphQLNonNull(GraphQLString)
        },
        TimestampLocal:{
            type: new GraphQLNonNull(GraphQLString)
        }, 
PublishUTC:{
    type: new GraphQLNonNull(GraphQLString)
},  
lat :{
    type: new GraphQLNonNull(GraphQLString)
},
lon:{
    type: new GraphQLNonNull(GraphQLString)
},  
altitude:{
    type: new GraphQLNonNull(GraphQLString)
}, 
heading:{
    type: new GraphQLNonNull(GraphQLString)
}, 
gpsspeed:{
    type: new GraphQLNonNull(GraphQLString)
}, 
no_of_satellites:{
    type: new GraphQLNonNull(GraphQLString)
},
location:{
    type: new GraphQLNonNull(GraphQLString)
},
gpsodometer:{
    type: new GraphQLNonNull(GraphQLString)
}, 
AvgAccelerometerX:{
    type: new GraphQLNonNull(GraphQLString)
}, 
AvgAccelerometerY:{
    type: new GraphQLNonNull(GraphQLString)
}, 
AvgAccelerometerZ:{
    type: new GraphQLNonNull(GraphQLString)
}, 
fw_ver:{
    type: new GraphQLNonNull(GraphQLString)
}, 
vehicle_type:{
    type: new GraphQLNonNull(GraphQLString)
}, 
vehicle_type_description:{
    type: new GraphQLNonNull(GraphQLString)
}, 
VIN:{
    type: new GraphQLNonNull(GraphQLString)
}, 
SubscriptionEndDate:{
    type: new GraphQLNonNull(GraphQLString)
}, 
Elevation:{
    type: new GraphQLNonNull(GraphQLString)
},  
Frequency_from_W:{
    type: new GraphQLNonNull(GraphQLString)
},
ign_status:{
    type: new GraphQLNonNull(GraphQLString)
}, 
vehicle_battery_potential:{
    type: new GraphQLNonNull(GraphQLString)
},  
obu_batt_volt:{
    type: new GraphQLNonNull(GraphQLString)
},  
fuellevel:{
    type: new GraphQLNonNull(GraphQLString)
},  
device_fuel_level:{
    type: new GraphQLNonNull(GraphQLString)
},  
wheel_based_speed:{
    type: new GraphQLNonNull(GraphQLString)
}, 
enginespeed:{
    type: new GraphQLNonNull(GraphQLString)
},  
device_engine_speed:{
    type: new GraphQLNonNull(GraphQLString)
}, 
enginecoolanttemperature:{
    type: new GraphQLNonNull(GraphQLString)
},
FuelConsumption:{
    type: new GraphQLNonNull(GraphQLString)
}, 
ThrottlePosition:{
    type: new GraphQLNonNull(GraphQLString)
}, 
Engine_Torque:{
    type: new GraphQLNonNull(GraphQLString)
}, 
EngineHours:{
    type: new GraphQLNonNull(GraphQLString)
}, 
FrictionalTorque:{
    type: new GraphQLNonNull(GraphQLString)
}, 
engine_oil_pressure:{
    type: new GraphQLNonNull(GraphQLString)
},  
ClutchSwitch:{
    type: new GraphQLNonNull(GraphQLString)
}, 
BrakeSwitch:{
    type: new GraphQLNonNull(GraphQLString)
}, 
VehicleDistance:{
    type: new GraphQLNonNull(GraphQLString)
}, 
EngineOilTemperature:{
    type: new GraphQLNonNull(GraphQLString)
}, 
EngineIntakePressure_1:{
    type: new GraphQLNonNull(GraphQLString)
}, 
EngineIntakeTemperature_1:{
    type: new GraphQLNonNull(GraphQLString)
}, 
EngineAirInletPressure:{
    type: new GraphQLNonNull(GraphQLString)
},  
BarometricPressure:{
    type: new GraphQLNonNull(GraphQLString)
},  
EngineFuelTemperature_1:{
    type: new GraphQLNonNull(GraphQLString)
}, 
DriversDemandEnginePercentTorque:{
    type: new GraphQLNonNull(GraphQLString)
}, 
BatteryChargingCurrent:{
    type: new GraphQLNonNull(GraphQLString)
},  
AirPressure_1:{
    type: new GraphQLNonNull(GraphQLString)
},  
AirPressure_2:{
    type: new GraphQLNonNull(GraphQLString)
},  
DistanceToEmpty:{
    type: new GraphQLNonNull(GraphQLString)
}, 
GSASCompliance:{
    type: new GraphQLNonNull(GraphQLString)
}, 
AirPressureDigital:{
    type: new GraphQLNonNull(GraphQLString)
}, 
OilPressureDigital:{
    type: new GraphQLNonNull(GraphQLString)
}, 
gsm_signal:{
    type: new GraphQLNonNull(GraphQLString)
},  
alertid:{
    type: new GraphQLNonNull(GraphQLString)
}, 
Silent:{
    type: new GraphQLNonNull(GraphQLInt)
},  
ReportGeneratedDate:{
    type: new GraphQLNonNull(GraphQLInt)
},

    }
})