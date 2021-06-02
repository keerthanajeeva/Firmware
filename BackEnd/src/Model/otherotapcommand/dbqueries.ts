const  mysql =require ('../../config/mysqlwrapper')
export class dbqueries {
    static TABLE_NAME: any;

    /**
     * This property can be overriden when the ID column is differet from 'id'
     */
    static get PRIMARY_KEY() {
        return "DeviceID";
    }

    /**
     * Retrieves a single entry matching the passed ID
     * @param {Number} id - The entry ID
     */
    static async find(DeviceID: any) {
        return (await mysql.createQuery({
            query: `SELECT * FROM ?? WHERE ?? = ? LIMIT 1;`,
            // query:`SELECT * FROM ?? WHERE ?? IN (??);`,
            // query:`SELECT * FROM otherotapcommand WHERE DeviceID IN (${DeviceID})`,
            params: [this.TABLE_NAME, this.PRIMARY_KEY, DeviceID]
        })).shift()
    }

    /**
     * Retrieves all entries on the extending class' table
     */
    static findAll() {
        return mysql.createQuery({
            query: `SELECT * FROM ??;`,
            params: [this.TABLE_NAME]
        });
    }

    /**
     * Find entries by their fields
     * @param {Object} fields - The fields to be matched
     * @param {Object} limit - Limits the amount of returned entries
     * @param {Object} order - Orders the returned entries using a provided field
     */
    static findByFields({fields, limit, order}:{
        fields:any,
        limit:any,
        order:any
    })
     {
   

        let baseQuery = `SELECT * FROM ?? WHERE `
       

        let params = [this.TABLE_NAME]

        Object.keys(fields).forEach((key, index) => {
            // console.log("keys",key);
            // console.log("index",index);
            
            
            baseQuery += `${key} IN (?) `
            params.push(fields[key])
            // if (index + 1 !== Object.keys(fields).length) baseQuery += " AND "
        })
        console.log("basequery",baseQuery);
        console.log("params",params);
        
        
        return mysql.createQuery({
            query: baseQuery,
            params,
        
        })
}
       


    /**
     * Updates an entry
     * @param {MySQL.Connection} connection - The connection which will do the update. It should be immediatelly released unless in a transaction
     * @param {Object} data - The data fields which will be updated
     * @param {Number} id - The ID of the entry to be updated
     */
    static update(connection: any, {data, DeviceType}: any) {
        return mysql.createTransactionalQuery({
            query: `UPDATE ??
                    SET ?
                    WHERE ?? = ?;`,
            params: [this.TABLE_NAME, data, this.PRIMARY_KEY, DeviceType],
            connection
        })
    }

    /**
     * Inserts a new entry
     * @param {MySQL.Connection} connection - The connection which will do the insert. It should be immediatelly released unless in a transaction
     * @param {Object} data - The fields which will populate the new entry
     */
    static insert(connection: any, {data}: any) {
        return mysql.createTransactionalQuery({
            query: `INSERT INTO ${this.TABLE_NAME}
                    SET ?;`,
            params: [data],
            connection
        })
    }

    /**
     * Deletes an entry
     * @param {MySQL.Connection} connection - The connection which will do the deletion. It should be immediatelly released unless in a transaction
     * @param {Number} id - The ID of the entry to be deleted
     */
    static delete(connection: any, {DeviceType}: any) {
        return mysql.createTransactionalQuery({
            query: `DELETE FROM  ??
                    WHERE ?? = ?;`,
            params: [this.TABLE_NAME,this.PRIMARY_KEY, DeviceType],
            connection
        })
    }

    // static async findbylist({DeviceID}:any){
    //     return (await mysql.createQuery({
    //         // query:`SELECT * FROM TABLE WHERE ID IN (id1, id2, ..., idn)`
    //         query:`SELECT * FROM ?? WHERE ?? IN ("?");`,
    //         params:[this.TABLE_NAME,this.PRIMARY_KEY,DeviceID],
    //         // connection
        

    //     }))
       
    // }
   

 
}
module.exports = dbqueries