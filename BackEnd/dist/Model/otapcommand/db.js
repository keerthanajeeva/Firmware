"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbqueries = void 0;
var mysql = require('../../config/mysqlwrapper');
var dbqueries = /** @class */ (function () {
    function dbqueries() {
    }
    dbqueries.findById = function (DeviceID, result) {
        mysql.query = "SELECT * FROM otapcommand WHERE DeviceID IN (" + DeviceID + ")";
        var params = [this.TABLE_NAME];
        return mysql.createQuery({
            // baseQuery,
            params: params
        });
    };
    return dbqueries;
}());
exports.dbqueries = dbqueries;
module.exports = dbqueries;
