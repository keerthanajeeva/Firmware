"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbqueries = void 0;
var mysql = require('./mysqlwrapper');
var dbqueries = /** @class */ (function () {
    function dbqueries() {
    }
    Object.defineProperty(dbqueries, "PRIMARY_KEY", {
        /**
         * This property can be overriden when the ID column is differet from 'id'
         */
        get: function () {
            return "ID";
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves a single entry matching the passed ID
     * @param {Number} id - The entry ID
     */
    dbqueries.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mysql.createQuery({
                            query: "SELECT * FROM ?? WHERE ?? = ? LIMIT 1;",
                            // query:`SELECT * FROM otapcommand WHERE DeviceID (${DeviceID})`,
                            params: [this.TABLE_NAME, this.PRIMARY_KEY, id]
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).shift()];
                }
            });
        });
    };
    /**
     * Retrieves all entries on the extending class' table
     */
    dbqueries.findAll = function () {
        return mysql.createQuery({
            query: "SELECT * FROM ??;",
            // query: `SELECT * FROM firmwaredetailc ;`,
            params: [this.TABLE_NAME]
        });
    };
    /**
     * Find entries by their fields
     * @param {Object} fields - The fields to be matched
     * @param {Object} limit - Limits the amount of returned entries
     * @param {Object} order - Orders the returned entries using a provided field
     */
    dbqueries.findByFields = function (_a) {
        var fields = _a.fields, limit = _a.limit, order = _a.order;
        var baseQuery = "SELECT * FROM ?? WHERE ";
        var params = [this.TABLE_NAME];
        Object.keys(fields).forEach(function (key, index) {
            baseQuery += key + " = ?";
            params.push(fields[key]);
            if (index + 1 !== Object.keys(fields).length)
                baseQuery += " AND ";
        });
        if (order != null && order.by != null && order.direction != null) {
            baseQuery += " ORDER BY ??";
            // baseQuery += order.direction === sqlConstants.DESC ? " DESC" : " ASC"
            params.push(order.by);
        }
        if (limit != null && !isNaN(limit)) {
            baseQuery += " LIMIT ?";
            params.push(limit);
        }
        return mysql.createQuery({
            query: baseQuery,
            params: params
        });
    };
    dbqueries.findById = function (DeviceID, result) {
        var baseQuery = "SELECT * FROM otapcommand WHERE DEviceID IN (" + DeviceID + ")";
        var params = [this.TABLE_NAME];
        return mysql.createQuery({
            baseQuery: baseQuery,
            params: params
        });
    };
    /**
     * Updates an entry
     * @param {MySQL.Connection} connection - The connection which will do the update. It should be immediatelly released unless in a transaction
     * @param {Object} data - The data fields which will be updated
     * @param {Number} id - The ID of the entry to be updated
     */
    dbqueries.update = function (connection, _a) {
        var data = _a.data, id = _a.id;
        return mysql.createTransactionalQuery({
            query: "UPDATE ??\n                    SET ?\n                    WHERE ?? = ?;",
            params: [this.TABLE_NAME, data, this.PRIMARY_KEY, id],
            connection: connection
        });
    };
    /**
     * Inserts a new entry
     * @param {MySQL.Connection} connection - The connection which will do the insert. It should be immediatelly released unless in a transaction
     * @param {Object} data - The fields which will populate the new entry
     */
    dbqueries.insert = function (connection, _a) {
        var data = _a.data;
        return mysql.createTransactionalQuery({
            query: "INSERT INTO " + this.TABLE_NAME + "\n                    SET ?;",
            params: [data],
            connection: connection
        });
    };
    /**
     * Deletes an entry
     * @param {MySQL.Connection} connection - The connection which will do the deletion. It should be immediatelly released unless in a transaction
     * @param {Number} id - The ID of the entry to be deleted
     */
    dbqueries.delete = function (connection, _a) {
        var id = _a.id;
        return mysql.createTransactionalQuery({
            query: "DELETE FROM  ??\n                    WHERE ?? = ?;",
            params: [this.TABLE_NAME, this.PRIMARY_KEY, id],
            connection: connection
        });
    };
    return dbqueries;
}());
exports.dbqueries = dbqueries;
module.exports = dbqueries;
