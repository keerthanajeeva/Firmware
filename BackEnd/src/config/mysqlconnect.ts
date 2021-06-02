import  mysql from 'mysql'

export class MydbConnector {
    internalPool: any

    get MYSQL_DB_USER() { return process.env.MYSQL_DB_USER || 'root' }
    get MYSQL_DB_NAME() { return process.env.MYSQL_DB_NAME || 'oem_op' }
    get MYSQL_DB_PASSWORD() { return process.env.MYSQL_DB_PASSWORD || 'root' }
    get MYSQL_DB_ADDRESS() { return process.env.MYSQL_DB_ADDRESS || 'localhost' }
      // get MYSQL_DB_POOL_SIZE() { return process.env.MYSQL_DB_POOL_SIZE || 10 }
    constructor() {
        this.internalPool = mysql.createPool({
            host: this.MYSQL_DB_ADDRESS,
            user: this.MYSQL_DB_USER,
            database: this.MYSQL_DB_NAME,
            password: this.MYSQL_DB_PASSWORD,
            // waitForConnections: true
        })
        
        this.registerThreadCounter()
    }
    registerThreadCounter() {
        this.internalPool.on('connection', (connection: { threadId: any }) => console.log(`Db is connected${connection.threadId}`))
    }

    get pool() {
        return this.internalPool
    }
}

module.exports = new MydbConnector()