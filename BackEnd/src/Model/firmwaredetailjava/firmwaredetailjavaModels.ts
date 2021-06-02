const dbqueries=require('../../config/dbqueries');
const mysqlwrapper=require('../../config/mysqlwrapper')

export class Javadetail extends dbqueries {
    static find: any
    static findAll: any
    static findByFields: any
    static insert: any
    static update: any
    //  Overrides TABLE_NAME with this class' backing table at MySQL
    static get TABLE_NAME() {
        return 'firmwaredetailjava'
    }

     // Returns a device by its ID
    static async getByID(_: any, {ID}: { ID: any; }) {
        return await this.find(ID)
    }

    /**
     * Returns a list of device  matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_: any, fields: {}) {
        // Returns early with all device if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching device
        return this.findByFields({
            fields
        })
    }
    // Creates a new device mutations for update 

    static async createEntry(_: any, {Name, ServerIP,UserName,Password,FileSize,FilePath,Port,
        InsertUTC,UpdateUTC,IsActive,ReleaseNotes,IsFirmware,isSNM476}: any) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    Name, ServerIP,UserName,Password,FileSize,FilePath,Port,
        InsertUTC,UpdateUTC,IsActive,ReleaseNotes,IsFirmware,isSNM476
                }
            })

            return this.getByID(_, {ID: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a device
     */
    static async updateEntry(_: any, {ID, type, price}: any) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                ID,
                data: {
                    type,
                    price
                }
            })

            return this.getByID(_, {ID})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Javadetail