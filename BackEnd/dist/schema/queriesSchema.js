"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var deviceQueres = require('../Model/devicetype/queriesModels');
var DevicepacketsummaryQuery = require('../Model/fdadevicepacketsummary/queriesModels');
var firmwaredetailcQuery = require('../Model/firmwaredetailC/queriesModels');
var firmwaredetailjavaQuery = require('../Model/firmwaredetailjava/queriesModels');
var devicefirmwareinfoQuery = require('../Model/devicefirmwareinfo/queriesModels');
var devicemasterQuery = require('../Model/devicemaster/queriesModels');
var fdadevicereportingstatusQuery = require('../Model/fdadevicereportingstatus/queriesModels');
var customertypeQuery = require('../Model/customertype/queriesModels');
var customerQuery = require('../Model/customer/queriesModels');
var customeraccountrelationshipQuery = require('../Model/customeraccountrelationship/queriesModels');
var otapcommandQuery = require('../Model/otapcommand/queriesModels');
var otherotapcommandQuery = require('../Model/otherotapcommand/queriesModels');
module.exports = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Device:deviceQueres.device,
        devicetype: deviceQueres.devicetype,
        devicepacket: DevicepacketsummaryQuery.devicepacket,
        // summarypacket:DevicepacketsummaryQuery.packetsummary,
        detailC: firmwaredetailcQuery.detailC,
        // firmwaredetailC:firmwaredetailcQuery.firmwaredetailC,
        detailJava: firmwaredetailjavaQuery.detailJava,
        // firmwaredetailjava:firmwaredetailjavaQuery.firmwaredetailjava,
        deviceInfo: devicefirmwareinfoQuery.deviceInfo,
        // devicefirmwareinfo:devicefirmwareinfoQuery.devicefirmwareinfo,
        devicemaster: devicemasterQuery.devicemaster,
        // devicemaster:devicemasterQuery.devicedMaster,
        reportingstatus: fdadevicereportingstatusQuery.reportingstatus,
        // fdadevicereportingstatus:fdadevicereportingstatusQuery.fdadevicereportingstatus,
        customertype: customertypeQuery.customertype,
        // customer:customertypeQuery.customer,
        customer: customerQuery.customer,
        // Customers:customerQuery.Customers,
        customeraccountrelationshipQuery: customeraccountrelationshipQuery.customeraccountrelationship,
        // accountrelationship:customeraccountrelationshipQuery.accountrelationship,
        OtapCommand: otapcommandQuery.OtapCommand,
        // CommandOtap:otapcommandQuery.CommandOtap,
        otherotapcommand: otherotapcommandQuery.otherotapcommand,
        otapcommand: otherotapcommandQuery.otapcommand,
    }
});
