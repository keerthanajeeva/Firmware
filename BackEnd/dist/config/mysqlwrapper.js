"use strict";
var mysqlconnect = require('./mysqlconnect');
module.exports = /** @class */ (function () {
    function mysqlwrapper() {
    }
    mysqlwrapper.createQuery = function (_a) {
        var query = _a.query, params = _a.params;
        return new Promise(function (succeed, fail) {
            mysqlconnect.pool.getConnection(function (err, connection) {
                if (err) {
                    return fail(err);
                }
                //Runs the query
                connection.query(query, params, function (err, rows) {
                    connection.release();
                    if (err) {
                        return fail(err);
                    }
                    return succeed(rows);
                });
            });
        });
    };
    /**
     *
     *
     * Runs a transactional query
     * @param {MySQL.Connection} connection - The connection whose transaction will be used
     * @param {String} query - The query itself
     * @param {Array} params - The parameters to be passed to MySQL
     * @returns {Promise} - A promise to a query result
     *
     */
    mysqlwrapper.createTransactionalQuery = function (_a) {
        var query = _a.query, params = _a.params, connection = _a.connection;
        return new Promise(function (succeed, fail) {
            connection.query(query, params, function (err, rows) {
                //If an error was passed running the query, fails the promise sending it to the caller
                if (err) {
                    return fail(err);
                }
                //Fulfills the promise
                return succeed(rows);
            });
        });
    };
    /**
     *
     *
     * Rollbacks a transaction
     * @param {MySQL.Connection} connection - The connection whose transaction will be rollbacked
     * @returns {Promise} - A promise to the rollback
     *
     */
    mysqlwrapper.rollback = function (connection) {
        return new Promise(function (succeed, fail) {
            try {
                connection.rollback(function () { return succeed(); });
            }
            catch (e) {
                return fail(e);
            }
            finally {
                connection.release();
            }
        });
    };
    /**
     *
     *
     * Commits a transaction
     * @param {MySQL.Connection} connection - The connection whose transaction will be commited
     * @returns {Promise} - A promise to the commit
     *
     */
    mysqlwrapper.commit = function (connection) {
        return new Promise(function (succeed, fail) {
            try {
                connection.commit(function (err) {
                    if (err) {
                        return mysqlwrapper.rollback;
                    }
                    return succeed();
                });
            }
            catch (e) {
                return fail(e);
            }
            finally {
                connection.release();
            }
        });
    };
    /**
     *
     *
     * Retrieves a connection from the pool to be used in transactions
     * @param {MySQL.Connection} connection - A connection from the pool
     *
     */
    mysqlwrapper.getConnectionFromPool = function () {
        return new Promise(function (succeed, fail) {
            mysqlconnect.pool.getConnection(function (err, connection) {
                //Fails the promise if a connection cannot be retrieved
                if (err) {
                    return fail(err);
                }
                //Returns a conncetion
                return succeed(connection);
            });
        });
    };
    /**
     *
     *
     * Begins a new transaction in a connection
     * @param {MySQL.Connection} connection - A connection from the pool
     *
     */
    mysqlwrapper.beginTransaction = function (connection) {
        return new Promise(function (succeed, fail) {
            connection.beginTransaction(function (err) {
                //Fails the promise if the transaction cannot be opened
                if (err) {
                    return fail(err);
                }
                //Fulfills the promise
                return succeed(connection);
            });
        });
    };
    return mysqlwrapper;
}());
