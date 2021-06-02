
// console.log("server file");


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
var Routes=require('./routes/app')

class App {
    expressApp: any;
    constructor() {
        this.expressApp = express()
        // this.configs = {
        //     get port() {
        //         return process.env.PORT || 5090
        //     }
        // }
    }
    applyMiddleware() {
        this.expressApp.use(bodyParser.json())
        this.expressApp.use(cors())
        new Routes (this.expressApp)
       
    }

    run() {
        this.expressApp.listen(4080,() => {console.log("The port running successfully at 4080")
        })
    }
}

//Runs the thing
const app = new App()
app.applyMiddleware()
app.run()
