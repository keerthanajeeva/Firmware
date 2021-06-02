import { GraphQLObjectType } from 'graphql'

// console.log("schema queries file");

const deviceQueres=require('../Model/devicetype/queriesModels')
const DevicepacketsummaryQuery=require('../Model/fdadevicepacketsummary/queriesModels')
const firmwaredetailcQuery=require('../Model/firmwaredetailC/queriesModels')
const firmwaredetailjavaQuery=require('../Model/firmwaredetailjava/queriesModels')
const devicefirmwareinfoQuery=require('../Model/devicefirmwareinfo/queriesModels')
const devicemasterQuery=require('../Model/devicemaster/queriesModels')
const fdadevicereportingstatusQuery=require('../Model/fdadevicereportingstatus/queriesModels')
const customertypeQuery=require('../Model/customertype/queriesModels')
const customerQuery=require('../Model/customer/queriesModels')
const customeraccountrelationshipQuery=require('../Model/customeraccountrelationship/queriesModels')
const otapcommandQuery=require('../Model/otapcommand/queriesModels')
const otherotapcommandQuery=require('../Model/otherotapcommand/queriesModels')





// const detailcandjavaquery=require('../Model/firmwaredetailC/bothtypes')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Device:deviceQueres.device,
        devicetype: deviceQueres.devicetype,
        devicepacket:DevicepacketsummaryQuery.devicepacket,
        // summarypacket:DevicepacketsummaryQuery.packetsummary,
        detailC:firmwaredetailcQuery.detailC,
        // detailC:firmwaredetailcQuery.detailC.Javadetail,
        firmwaredetailC:firmwaredetailcQuery.firmwaredetailC,
        Javadetail:firmwaredetailcQuery.Javadetail,


        detailJava:firmwaredetailjavaQuery.detailJava,
        // firmwaredetailjava:firmwaredetailjavaQuery.firmwaredetailjava,
        // Javadetail:firmwaredetailjavaQuery.Javadetail,
        deviceInfo:devicefirmwareinfoQuery.deviceInfo,
        // devicefirmwareinfo:devicefirmwareinfoQuery.devicefirmwareinfo,
        devicemaster:devicemasterQuery.devicemaster,
        // devicemaster:devicemasterQuery.devicedMaster,
        reportingstatus:fdadevicereportingstatusQuery.reportingstatus,
        // fdadevicereportingstatus:fdadevicereportingstatusQuery.fdadevicereportingstatus,
        customertype:customertypeQuery.customertype,
        // customer:customertypeQuery.customer,
        customer:customerQuery.customer,
        // Customers:customerQuery.Customers,
        customeraccountrelationshipQuery:customeraccountrelationshipQuery.customeraccountrelationship,
        // accountrelationship:customeraccountrelationshipQuery.accountrelationship,
        OtapCommand:otapcommandQuery.OtapCommand,
        // CommandOtap:otapcommandQuery.CommandOtap,



        otherotapcommand:otherotapcommandQuery.otherotapcommand,
        otapcommand:otherotapcommandQuery.otapcommand,
        otapcommandDeviceID:otherotapcommandQuery.otapcommandDeviceID,
        // commandforotap:otherotapcommandQuery.commandforotap
        
        


        // detailCandjavatest:detailcandjavaquery.detailCandjavatest
    }
})
