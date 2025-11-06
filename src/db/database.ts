import { Sequelize, Dialect } from "sequelize";
import { env } from "src/env";

const dbName = env.DB_NAME
const dbUser = env.DB_USER
const dbPassword = env.DB_PASSWORD
const dbHost = env.DB_HOST
const dbDialect = env.DB_DIALECT
const dbPort = env.DB_PORT

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: dbDialect as Dialect,
})