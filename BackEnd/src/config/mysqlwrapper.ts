const mysqlconnect=require('./mysqlconnect');

module.exports = class mysqlwrapper {

    static createQuery({query, params}:{query:any,params:any}) {

        return new Promise((succeed, fail) => {
            mysqlconnect.pool.getConnection((err: any, connection: { query: (arg0: any, arg1: any, arg2: (err: any, rows: any) => void) => void; release: () => void; }) => {
                if (err) {
                    return fail(err)
                }

                //Runs the query
                connection.query(query, params, (err: any, rows:any) => {
                    connection.release()
                    if (err) {
                        return fail(err)
                    }
                    return succeed(rows)
                })
            })
        })
    }
    
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
     static createTransactionalQuery({query, params, connection}:{query:any,params:any,connection:any}): Promise<any> {
        
        return new Promise((succeed, fail) => {

            connection.query(query, params, (err: any, rows: any) => {
                
                //If an error was passed running the query, fails the promise sending it to the caller
                if (err) {
                    return fail(err)
                }
                
                //Fulfills the promise
                return succeed(rows)
            })
        })
    }
    
    /**
     * 
     * 
     * Rollbacks a transaction
     * @param {MySQL.Connection} connection - The connection whose transaction will be rollbacked
     * @returns {Promise} - A promise to the rollback
     * 
     */
    static rollback(connection: { rollback: (arg0: () => void) => void; release: () => void; }): Promise<any> {

        return new Promise<void>((succeed, fail) => {

            try {
                connection.rollback(() => succeed())
            } catch (e) {
                return fail(e)
            } finally {
                connection.release()
            }

        })
    }

    /**
     * 
     * 
     * Commits a transaction
     * @param {MySQL.Connection} connection - The connection whose transaction will be commited
     * @returns {Promise} - A promise to the commit
     * 
     */
    static commit(connection: { commit: (arg0: (err: any) => void | ((connection: { rollback: (arg0: () => void) => void; release: () => void; }) => Promise<any>)) => void; release: () => void; }): Promise<any> {

        return new Promise<void>((succeed, fail) => {

            try {
                connection.commit(err => { 
                    if (err) { 
                        return mysqlwrapper.rollback
                    }

                    return succeed()
                })
            } catch (e) {
                return fail(e)
            } finally {
                connection.release()
            }

        })

    }

    /**
     * 
     * 
     * Retrieves a connection from the pool to be used in transactions
     * @param {MySQL.Connection} connection - A connection from the pool
     * 
     */
    static getConnectionFromPool() {
        return new Promise((succeed, fail) => {

            mysqlconnect.pool.getConnection((err: any, connection:any) => {

                //Fails the promise if a connection cannot be retrieved
                if (err) {
                    return fail(err)
                }

                //Returns a conncetion
                return succeed(connection)
            })
        })
    }

    /**
     * 
     * 
     * Begins a new transaction in a connection
     * @param {MySQL.Connection} connection - A connection from the pool
     * 
     */
    static beginTransaction(connection:any) {
        return new Promise((succeed, fail) => {

            connection.beginTransaction((err: any) => {

                //Fails the promise if the transaction cannot be opened
                if (err) {
                    return fail(err)
                }

                //Fulfills the promise
                return succeed(connection)
            })
        })
    }
}
