"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var DetailC = require('./firmwaredetailCModels');
// Defines the queries
module.exports = {
    detailC: {
        type: new graphql_1.GraphQLList(type),
        args: {
            Name: {
                type: graphql_1.GraphQLString
            },
            ServerIP: {
                type: graphql_1.GraphQLString
            },
            UserName: {
                type: graphql_1.GraphQLString
            },
            Password: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: DetailC.findMatching.bind(DetailC)
    },
    firmwaredetailC: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: DetailC.getByID.bind(DetailC)
    }
};
