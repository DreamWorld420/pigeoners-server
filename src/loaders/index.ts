import { Express } from "express";
import expressLoader from "./express";
import sequelizeLoader from "./sequelize";

export default async (app: Express) => {
	expressLoader(app);
	await sequelizeLoader();
};
