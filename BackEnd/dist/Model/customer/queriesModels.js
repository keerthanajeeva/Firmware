"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var Customertype = require('./customerModels');
// Defines the queries
module.exports = {
    customer: {
        type: new graphql_1.GraphQLList(type),
        args: {
            Name: {
                type: graphql_1.GraphQLString
            },
            fk_CustomerTypeId: {
                type: graphql_1.GraphQLInt
            },
            InsertUTC: {
                type: graphql_1.GraphQLString
            },
            UpdateUTC: {
                type: graphql_1.GraphQLString
            },
            IsActive: {
                type: graphql_1.GraphQLBoolean
            },
            fk_OEMID: {
                type: graphql_1.GraphQLInt
            },
            ParentCustomerID: {
                type: graphql_1.GraphQLInt
            },
            CustomerCode: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: Customertype.findMatching.bind(Customertype)
    },
    Customers: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: Customertype.getByID.bind(Customertype)
    }
};
