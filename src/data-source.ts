import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import path = require("path")

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "node",
    password: "node123",
    database: "docker1",
    synchronize: true,
    logging: true,
    entities: [path.join(__dirname + '/entity/**')],
    migrations: [],
    subscribers: [],
})
