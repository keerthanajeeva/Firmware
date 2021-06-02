"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Customertype = require('./customertypeModels');
// Defines the queries
module.exports = {
    customertype: {
        type: new graphql_1.GraphQLList(type),
        args: {
            CustomerType: {
                type: graphql_1.GraphQLString
            },
            IsActive: {
                type: graphql_1.GraphQLBoolean
            }
        },
        resolve: Customertype.findMatching.bind(Customertype)
    },
    customer: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: Customertype.getByID.bind(Customertype)
    }
};
