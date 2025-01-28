import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import { useExpressServer } from "routing-controllers";
import path = require("path");

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    const server = useExpressServer(app, {
        cors: false,
        routePrefix: '/api',
        controllers: [path.join(__dirname + '/controller/**')]
    })

    server.listen(3000)

    console.log("Express server has started on port 3000. Open http://localhost:3000/api/users to see results")

}).catch(error => console.log(error))
