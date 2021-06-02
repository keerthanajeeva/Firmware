"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var Routes = require('./routes/app');
var App = /** @class */ (function () {
    function App() {
        this.expressApp = express_1.default();
        // this.configs = {
        //     get port() {
        //         return process.env.PORT || 5090
        //     }
        // }
    }
    App.prototype.applyMiddleware = function () {
        this.expressApp.use(body_parser_1.default.json());
        this.expressApp.use(cors_1.default());
        new Routes(this.expressApp);
    };
    App.prototype.run = function () {
        this.expressApp.listen(6080, function () {
            console.log("The port running successfully at 6080");
        });
    };
    return App;
}());
//Runs the thing
var app = new App();
app.applyMiddleware();
app.run();
