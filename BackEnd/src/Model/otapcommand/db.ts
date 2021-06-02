const mysql= require('../../config/mysqlwrapper');
export class dbqueries {
static TABLE_NAME: any;
static findById(DeviceID: any,result: any){
     mysql.query=`SELECT * FROM otapcommand WHERE DeviceID IN (${DeviceID})`
    let params=[this.TABLE_NAME]

    return mysql.createQuery({
        // baseQuery,
        params
    })
}
}
module.exports=dbqueries










