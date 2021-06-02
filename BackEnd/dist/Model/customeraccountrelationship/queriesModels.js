"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type = require('./type');
// const mutation = require('./mutations')
var customeraccountrelationship = require('./customeraccountrelationshipModels');
// Defines the queries
module.exports = {
    customeraccountrelationship: {
        type: new graphql_1.GraphQLList(type),
        args: {
            AccountName: {
                type: graphql_1.GraphQLString
            },
            fk_DealerId: {
                type: graphql_1.GraphQLInt
            },
            fk_CustomerId: {
                type: graphql_1.GraphQLInt
            },
            BSSID: {
                type: graphql_1.GraphQLString
            },
            InsertUTC: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: customeraccountrelationship.findMatching.bind(customeraccountrelationship)
    },
    accountrelationship: {
        type: type,
        args: {
            ID: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: customeraccountrelationship.getByID.bind(customeraccountrelationship)
    }
};
