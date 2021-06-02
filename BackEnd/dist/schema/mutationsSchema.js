"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
// const deviceMutation=require('../Model/devicetype/mutationsModels')
// const otapcommandMutation=require('../Model/otapcommand/mutationsModels')
var otapcommandMutation = require('../Model/otapcommand/mutationModels');
module.exports = new graphql_1.GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addotapcommand: otapcommandMutation.addotapcommand,
        updateotapcommand: otapcommandMutation.updateotapcommand
    }
});
