import { Sequelize } from "sequelize";
import { Logger } from "../utils/logger.js";

const sequelizeConnection = new Sequelize(
    process.env["DATABASE_NAME"], process.env["DATABASE_USERNAME"], process.env["DATABASE_PASSWORD"], {
        dialect: "postgres",
        host: process.env["DATABASE_HOST"]
    }
)

sequelizeConnection.authenticate()
    .then(() => {
        new Logger().info("Authenticated on database!");
    })
    .catch(err => {
        new Logger().error("Can not make auth on database!\n", err);
    })

export default sequelizeConnection;