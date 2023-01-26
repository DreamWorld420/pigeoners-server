import { Express } from "express";
import expressLoader from "./express";
import sequelizeLoader from "./sequelize";
import { DatabaseLoaderOptions } from "@/types/sequelize";

export default async (app: Express, dbOptions?: DatabaseLoaderOptions) => {
	expressLoader(app);
	await sequelizeLoader(dbOptions);
};
