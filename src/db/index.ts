import config from "@/config";
import { Sequelize } from "sequelize";

const dbInstance = new Sequelize({
	dialect: "postgres",
	username: config.db.user,
	password: config.db.pass,
	host: config.db.host,
	port: config.db.port ? Number.parseInt(config.db.port) : undefined,
	database: config.db.name,
});

export default dbInstance;
