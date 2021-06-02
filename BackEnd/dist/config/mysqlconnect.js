"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MydbConnector = void 0;
var mysql_1 = __importDefault(require("mysql"));
var MydbConnector = /** @class */ (function () {
    // get MYSQL_DB_POOL_SIZE() { return process.env.MYSQL_DB_POOL_SIZE || 10 }
    function MydbConnector() {
        this.internalPool = mysql_1.default.createPool({
            host: this.MYSQL_DB_ADDRESS,
            user: this.MYSQL_DB_USER,
            database: this.MYSQL_DB_NAME,
            password: this.MYSQL_DB_PASSWORD,
            // waitForConnections: true
        });
        this.registerThreadCounter();
    }
    Object.defineProperty(MydbConnector.prototype, "MYSQL_DB_USER", {
        get: function () { return process.env.MYSQL_DB_USER || 'root'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MydbConnector.prototype, "MYSQL_DB_NAME", {
        get: function () { return process.env.MYSQL_DB_NAME || 'oem_op'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MydbConnector.prototype, "MYSQL_DB_PASSWORD", {
        get: function () { return process.env.MYSQL_DB_PASSWORD || 'root'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MydbConnector.prototype, "MYSQL_DB_ADDRESS", {
        get: function () { return process.env.MYSQL_DB_ADDRESS || 'localhost'; },
        enumerable: false,
        configurable: true
    });
    MydbConnector.prototype.registerThreadCounter = function () {
        this.internalPool.on('connection', function (connection) { return console.log("Db is connected" + connection.threadId); });
    };
    Object.defineProperty(MydbConnector.prototype, "pool", {
        get: function () {
            return this.internalPool;
        },
        enumerable: false,
        configurable: true
    });
    return MydbConnector;
}());
exports.MydbConnector = MydbConnector;
module.exports = new MydbConnector();
