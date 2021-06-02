// const mysql= require('../../config/mysqlwrapper');
// export class dbqueries {
//     static TABLE_NAME: any;


// // SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// // FROM Orders
// // INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

//     static async jointable(){
//         return mysql.createQuery({
//             // query:` SELECT firmwaredetailc.ID, firmwaredetailjava.ID FROM firmwaredetailc INNER JOIN 
//             // firmwaredetailjava ON firmwaredetailc.firmwaredetailjavaID=firmwaredetailjava.firmwaredetailjavaID`
//             query:`SELECT ID,NAME FROM firmwaredetailc INNER JOIN firmwaredetailjava ON 
//             firmwaredetailc.firmwaredetailjavaID=firmwaredetailjava.firmwaredetailjavaID`,
//         })
//     }





// module.exports = dbqueries