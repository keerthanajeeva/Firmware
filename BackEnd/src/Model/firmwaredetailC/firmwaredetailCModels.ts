const dbqueries=require('../../config/dbqueries')
// const dbqueries=require('./dbqueries')
const mysqlwrapper=require('../../config/mysqlwrapper')



export class DetailC extends dbqueries {
    static find: any
    static findAll: any
    static findByFields: any
    static insert: any
    static update: any


    //  Overrides TABLE_NAME with this class' backing table at MySQL
    static get TABLE_NAME() {
        return 'firmwaredetailc'
    }

     // Returns a device by its ID
    static async getByID(_: any, {ID}: { ID: any }) {
        return await this.find(ID)
    }

    /**
     * Returns a list of device  matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_: any, fields: {}) {
        // Returns early with all device if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        // console.log(this.findAll);

        // Find matching device
        return this.findByFields({
            fields
        })
    }
    
//    static async (_findmethods:any){
//        var DetailC=[],
//        DetailC.push({this.findAll})
//    }
    
//     static async findMethods(_:any,err:any,result:any){
//     var DataC: any[]=[]
// if(err){
//     console.log("err",err);
    
// }
// else{
//      DataC(this.findAll)
//      console.log(result);
    
// }
//     }
    // Creates a new device mutations for update 


    static async createEntry(_: any, {Name, ServerIP,UserName,Password,FileSize,FilePath,Port,
        InsertUTC,UpdateUTC,IsActive,ReleaseNotes,IsFirmware,isSNM476}: any) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    // type,
                    // price
                    Name,
                    ServerIP,UserName,Password,FileSize,FilePath,Port,
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
    static async updateEntry(_: any, {ID, Name, FileSize}: any) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                ID,
                data: {
                    Name,
                    FileSize
                }
            })

            return this.getByID(_, {ID})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
    
}

module.exports = DetailC;

