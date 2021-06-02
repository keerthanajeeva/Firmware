"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var DetailJava = require('./firmwaredetailjavaModels');
// Defines the queries
module.exports = {
    detailJava: {
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
        resolve: DetailJava.findMatching.bind(DetailJava)
    },
    firmwaredetailJava: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: DetailJava.getByID.bind(DetailJava)
    }
};
